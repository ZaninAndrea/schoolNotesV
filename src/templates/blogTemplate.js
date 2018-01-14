import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import GithubSlugger from "github-slugger";

export default function Template({ data, location: { pathname } }) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html, headings } = markdownRemark;
  const slugger = new GithubSlugger();

  function renderList(list, depth) {
    let topLevel = [];
    for (let header of list) {
      if (header.depth !== depth && topLevel.length !== 0) {
        topLevel[topLevel.length - 1].children.push(header);
      } else {
        topLevel.push({
          value: header.value,
          children: []
        });
      }
    }

    topLevel = topLevel.map(item => ({
      ...item,
      children: renderList(item.children, depth + 1)
    }));

    return topLevel;
  }

  const generateHTMLList = list => {
    return (
      <ul>
        {list.map(item => (
          <li>
            <Link to={pathname + "#" + slugger.slug(item.value)}>
              {item.value}
            </Link>
            {generateHTMLList(item.children)}
          </li>
        ))}
      </ul>
    );
  };

  const headingsList = generateHTMLList(renderList(headings, 1));

  return (
    <div className="blog-post-container">
      <Helmet title={frontmatter.title} />
      {frontmatter.pdfCompletoPath ? (
        <a
          className="downloadAppunti"
          href={"/schoolNotesV/pdfs/" + frontmatter.pdfCompletoPath}
          download
        >
          <i className="fas fa-download" />&nbsp;&nbsp;Download appunti completi
        </a>
      ) : (
        ""
      )}
      {headingsList}
      <br />
      <br />
      <div className="blog-post">
        <div
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        pdfCompletoPath
      }
      headings {
        value
        depth
      }
    }
  }
`;
