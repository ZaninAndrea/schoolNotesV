module.exports = {
  siteMetadata: {
    title: "Appunti Quinta"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    `gatsby-transformer-remark`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown`,
        name: "markdown-pages"
      }
    }
  ]
};
