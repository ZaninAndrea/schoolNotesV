import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import GithubSlugger from "github-slugger";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ZoomIn from "material-ui/svg-icons/action/zoom-in";
import ZoomOut from "material-ui/svg-icons/action/zoom-out";

export default class Template extends React.Component {
  constructor() {
    super();

    this.state = {
      fullScreen: false
    };
  }

  render() {
    const { data, location: { pathname } } = this.props;
    const { nimblRenderedHtml } = data; // data.nimblRenderedHtml holds our post data
    const { frontmatter, html, headings } = nimblRenderedHtml;
    const slugger = new GithubSlugger();

    function renderList(list, depth = 1) {
      let topLevel = [];
      for (let header of list) {
        if (header.depth !== depth && topLevel.length !== 0) {
          topLevel[topLevel.length - 1].children.push(header);
        } else {
          topLevel.push({
            value: header.value,
            rawText: header.rawText,
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
              <Link
                to={"#" + slugger.slug(item.rawText)}
                className="navigationLinks"
              >
                <span dangerouslySetInnerHTML={{ __html: item.value }} />
              </Link>
              {generateHTMLList(item.children)}
            </li>
          ))}
        </ul>
      );
    };

    const headingsList = generateHTMLList(renderList(headings));

    return (
      <div className="notesContainer">
        <FloatingActionButton
          style={{ position: "absolute", right: "50px", bottom: "35px" }}
          onClick={() =>
            this.setState(({ fullScreen }) => ({ fullScreen: !fullScreen }))
          }
          backgroundColor="#0081c6"
        >
          {this.state.fullScreen ? <ZoomOut /> : <ZoomIn />}
        </FloatingActionButton>
        <Helmet title={frontmatter.title}>
          <body className={this.state.fullScreen ? "fullScreen" : ""} />
        </Helmet>
        <div className="sidebarDownload">
          {/* {frontmatter.pdfCompletoPath ? (
          <a
            className="downloadAppunti"
            href={"/pdfs/" + frontmatter.pdfCompletoPath}
            download
          >
            <i className="fas fa-download" />&nbsp;&nbsp;Download appunti lunghi
          </a>
        ) : (
          ""
        )} */}
          <a className="print" onClick={() => window.print()}>
            <i className="fas fa-print" />&nbsp;&nbsp;Stampa
          </a>
        </div>
        <div className="sidebarList">{headingsList}</div>
        <div className="notesMain">
          {frontmatter.draft ? (
            <p className="draft">Questi appunti non sono completi</p>
          ) : (
            ""
          )}
          <div
            className="markdown-body"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    );
  }
}

export const pageQuery = graphql`
  query BlogPostByPath($category: String!, $title: String!) {
    nimblRenderedHtml(
      frontmatter: { category: { eq: $category }, title: { eq: $title } }
    ) {
      html
      frontmatter {
        title
        pdfCompletoPath
        draft
      }
      headings {
        value
        depth
        rawText
      }
    }
  }
`;
