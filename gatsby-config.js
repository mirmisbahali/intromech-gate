require('dotenv').config()

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
    },
    {
      resolve: `gatsby-source-firestore`,
      options: {
        config: {
          apiKey: process.env.API_KEY,
          authDomain: process.env.AUTH_DOMAIN,
          databaseURL: process.env.DATABASE_URL,
          projectId: process.env.PROJECT_ID,
          storageBucket: process.env.STORAGE_BUCKET,
          messagingSenderId: process.env.MESSAGING_SENDER_ID,
          appId: process.env.APP_ID,
          measurementId: process.env.MEASUREMENT_ID
        },
        types: [
          {
            type: "AE",
            path: "AEPaper"
          },
          {
            type: "CS",
            path: "CSPaper"
          }
        ]
      }
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