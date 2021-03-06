const admin = require('firebase-admin')
const serviceAccount = require('./firebase-key.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

const db = admin.firestore();

// myData = {}
const data = {}
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

            Object.assign(data, queryData[i])
            console.log(data)
        }

        // Object.assign(myData, data)
    // console.log(myData)

    })
})
.catch(e => console.log(e))
