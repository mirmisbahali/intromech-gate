const admin = require('firebase-admin')


exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }, {config, types}) => {
    const { createNode } = actions
  
    admin.initializeApp({
      credential: admin.credential.applicationDefault(),
      databaseURL: process.env.DATABASE_URL
    });

    const db = admin.firestore();

    // Data can come from anywhere, but for now create it manually
    types.forEach(async (item) => {

      db.collection(item.path).doc('gate2020').collection(item.type).get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          console.log(doc.id)
        })
      })
      
      


    })
  
    // const nodeContent = JSON.stringify(myData)
  
    // const nodeMeta = {
    //   id: createNodeId(`my-data-${myData.key}`),
    //   parent: null,
    //   children: [],
    //   internal: {
    //     type: `MyNodeType`,
    //     mediaType: `text/html`,
    //     content: nodeContent,
    //     contentDigest: createContentDigest(myData)
    //   }
    // }
  
    // const node = Object.assign({}, myData, nodeMeta)
    // createNode(node)
  }