module.exports = {
  siteMetadata: {
    title: 'Tanner Gaucher',
  },
  plugins: [
    'gatsby-plugin-offline',
    `gatsby-transformer-remark`,
    `gatsby-remark-copy-linked-files`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 800,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
  ],
}
