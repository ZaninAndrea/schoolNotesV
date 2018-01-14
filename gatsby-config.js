module.exports = {
  siteMetadata: {
    title: "Appunti Quinta",
    siteUrl: `http://andreazanin.me/schoolNotesV/`
  },
  pathPrefix: "/schoolNotesV",
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
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-autolink-headers`]
      }
    }
  ]
};
