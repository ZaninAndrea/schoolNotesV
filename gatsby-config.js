module.exports = {
  siteMetadata: {
    title: "Appunti Quinta",
    siteUrl: `http://zaninandrea.github.io`
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/markdown`,
        name: "markdown-pages"
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: "gatsby-transformer-nimbl",
      options: {
        mdSettings: {
          isPreview: false,
          html: true,
          linkify: false,
          typographer: false,
          breaks: true,
          checkbox: true,
          anchor: true,
          toc: true,
          tocLevels: [1, 2, 3, 4],
          katex: true,
          smartarrows: true,
          alert: true,
          note: true,
          spoiler: true,
          url: true,
          video: true,
          graph: true,
          highlighter: true,
          reviewQuestion: true
        },
        dir: "."
      }
    }
  ]
};
