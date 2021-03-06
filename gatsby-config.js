module.exports = {
  siteMetadata: {
    title: "im-gate",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    }
  ],
};


// function modifyData(doc) {
//   console.log(doc)
  // const data = {}
  
  // for (const i in doc) {
  //   doc[i]['que_type'] = doc[i]['Que.Type']
  //   doc[i]['q_no'] = doc[i]['Q.No']
  //   doc[i]['sec_name'] = doc[i]['Sec. Name']

  //   delete doc[i]['Que.Type']
  //   delete doc[i]['Q.No']
  //   delete doc[i]['Sec. Name']

  //   Object.assign(data, doc[i])
  // }
//   return data
// }