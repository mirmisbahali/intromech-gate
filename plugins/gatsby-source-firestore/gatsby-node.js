exports.sourceNodes = ({ actions, createNodeId, createContentDigest }, {config, types}) => {
    const { createNode } = actions
  
    // Data can come from anywhere, but for now create it manually
    console.log(config)
  
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