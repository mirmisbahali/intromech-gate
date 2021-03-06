const admin = require('firebase-admin')
const serviceAccount = require('./firebase-key.json')

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
    const { createNode } = actions

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    })

    const db = admin.firestore();

    myData = {}
    db.collection('AEPaper').doc('gate2020').collection('AE').get()
        .then(snapshot => {

            snapshot.forEach(doc => {
                const queryData = doc.data()
                for (const i in queryData) {
                    queryData[i]['que_type'] = queryData[i]['Que.Type']
                    queryData[i]['q_no'] = queryData[i]['Q.No']
                    queryData[i]['sec_name'] = queryData[i]['Sec. Name']

                    delete queryData[i]['Que.Type']
                    delete queryData[i]['Q.No']
                    delete queryData[i]['Sec. Name']

                    Object.assign(myData, queryData[i])


                    const nodeContent = JSON.stringify(myData)

                    const nodeMeta = {
                        id: createNodeId(`ae-paper-${myData['q_no']}`),
                        parent: null,
                        children: [],
                        internal: {
                            type: `AEPaper`,
                            mediaType: `text/html`,
                            content: nodeContent,
                            contentDigest: createContentDigest(myData)
                        }
                    }

                    const node = Object.assign({}, myData, nodeMeta)
                    createNode(node)
                }

            })
        })
        .catch(e => console.log(e))
    // Data can come from anywhere, but for now create it manually



}