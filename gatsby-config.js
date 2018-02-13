module.exports = {
  siteMetadata: {
    title: "Appunti Quinta",
    siteUrl: `http://zaninandrea.github.io`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Appunti V",
        short_name: "AppuntiV",
        start_url: "/",
        background_color: "white",
        theme_color: "#f85959",
        display: "standalone",
        icons: [
          {
            // Everything in /static will be copied to an equivalent
            // directory in /public during development and build, so
            // assuming your favicons are in /static/favicons,
            // you can reference them here
            src: `/favicons/logo192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `/favicons/logo512.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ]
      }
    },
    `gatsby-plugin-offline`,
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
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-114061125-1",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true
      }
    }
  ]
};
