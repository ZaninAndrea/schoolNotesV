const path = require("path");
const GithubSlugger = require("github-slugger");

exports.createPages = ({ boundActionCreators, graphql }) => {
  const slugger = new GithubSlugger();
  const { createPage } = boundActionCreators;

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`);

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            excerpt(pruneLength: 250)
            html
            id
            frontmatter {
              title
              category
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      console.log(result);
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path:
          "/" +
          node.frontmatter.category +
          "/" +
          slugger.slug(node.frontmatter.title),
        component: blogPostTemplate,
        context: {
          category: node.frontmatter.category,
          title: node.frontmatter.title
        } // additional data can be passed via context
      });
    });
  });
};
