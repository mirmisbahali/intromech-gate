const admin = require('firebase-admin')


exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }, { config, types }) => {
  const { createNode } = actions

  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: process.env.DATABASE_URL
  });

  const db = admin.firestore();

  // Data can come from anywhere, but for now create it manually
  types.forEach(async (item) => {

    db.collection(item.path).doc('gate2020').collection(item.path.slice(0, 2)).get()
      .then(snapshot => {



        snapshot.forEach(doc => {
          data = doc.data()
          myData = {}

          for (i in data) {
            data[i]['sec_name'] = data[i]['Sec. Name']
            data[i]['q_no'] = data[i]['Q.No']
            data[i]['q_type'] = data[i]['Que.Type']
            delete data[i]['Sec. Name']
            delete data[i]['Q.No']
            delete data[i]['Que.Type']

            Object.assign(myData, data[i])
            
          }

          const nodeContent = JSON.stringify(myData)

          const nodeMeta = {
            id: createNodeId(`${item.type}-${myData['q_no']}`),
            parent: null,
            children: [],
            internal: {
              type: item.type,
              mediaType: `text/html`,
              content: nodeContent,
              contentDigest: createContentDigest(myData)
            }
          }

          const node = Object.assign({}, myData, nodeMeta)
          createNode(node)
        })

      })




  })


}