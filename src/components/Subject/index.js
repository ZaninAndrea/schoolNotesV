import React, { Component } from "react";
import Link from "gatsby-link";

const SubjectHeader = ({ title, onClick, open }) => (
  <h1 onClick={onClick} className="subjectTitle">
    {open ? (
      <i className="fas fa-chevron-down" />
    ) : (
      <i className="fas fa-chevron-up" />
    )}{" "}
    {title}
  </h1>
);

class Subject extends Component {
  render() {
    const { title, onClick, open, children, pages, path } = this.props;

    const myPages = pages
      .filter(page => page.node.frontmatter.path.startsWith("/" + path))
      .sort((a, b) => a.node.frontmatter.index - b.node.frontmatter.index);

    const index =
      myPages.length === 0
        ? "Non ci sono ancora appunti"
        : myPages.map(page => (
            <Link to={page.node.frontmatter.path} className="notesLink">
              {page.node.frontmatter.title}
            </Link>
          ));
    return (
      <div className="subject">
        <SubjectHeader title={title} onClick={onClick} open={open} />
        {open ? <div>{index}</div> : ""}
      </div>
    );
  }
}

export default Subject;
