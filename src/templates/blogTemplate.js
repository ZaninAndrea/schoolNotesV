import React from "react";
import Helmet from "react-helmet";

export default function Template({
  data // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <div className="blog-post-container">
      <Helmet title={frontmatter.title} />
      <a
        className="downloadAppunti"
        href={"/schoolNotesV/pdfs/" + frontmatter.pdfCompletoPath}
        download
      >
        <i className="fas fa-download" />&nbsp;&nbsp;Download appunti completi
      </a>
      &nbsp;&nbsp;&nbsp;
      {/* <a
        className="downloadAppunti"
        href={"/schoolNotesV/pdfs/" + frontmatter.pdfCompletoPath}
        download
      >
        <i className="fas fa-download" />&nbsp;&nbsp;Download appunti riassunti
      </a> */}
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
    }
  }
`;
