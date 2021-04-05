const path = require('path')

exports.createPages = async ({graphql, actions}) => {
    const { createPage } = actions
    const data = graphql(`
    query MyQuery {
        allAe {
          nodes {
            question
          }
        }
      }
      
    `)
    createPage({
        path: '/ae',
        component: path.resolve('./src/templates/quiz.js'),
        
    })
}