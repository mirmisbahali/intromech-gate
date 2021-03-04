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
      resolve: 'gatsby-source-firestore',
      options: {
        credential: require('./firebase-key.json'),
        databaseURL: 'https://intromech-gate.firebaseio.com',
        types: [
          {
            type: "AEPaper",
            collection: 'AEPaper/gate2020/AE',
            map: doc => {
              return modifyData(doc)
            }
          },
          {
            type: "CE1Paper",
            collection: 'CE1Paper/gate2020/CE',
            map: doc => {
              return modifyData(doc)
            }
          },
          {
            type: "CE2Paper",
            collection: 'CE2Paper/gate2020/CE',
            map: doc => {
              return modifyData(doc)
            }
          },
          {
            type: "CSPaper",
            collection: 'CSPaper/gate2020/CS',
            map: doc => {
              return modifyData(doc)
            }
          },
          {
            type: "ECPaper",
            collection: 'ECPaper/gate2020/EC',
            map: doc => {
              return modifyData(doc)
            }
          },
          
        ]
      }
    }
  ],
};


function modifyData(doc) {
  const data = {}
  for (const i in doc) {
    doc[i]['que_type'] = doc[i]['Que.Type']
    doc[i]['q_no'] = doc[i]['Q.No']
    doc[i]['sec_name'] = doc[i]['Sec. Name']

    delete doc[i]['Que.Type']
    delete doc[i]['Q.No']
    delete doc[i]['Sec. Name']

    Object.assign(data, doc[i])
  }
  return data
}