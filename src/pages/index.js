import React, { Component } from "react";
import Link from "gatsby-link";
import Subject from "../components/Subject";

class IndexPage extends Component {
  constructor(props) {
    super(props);

    const categories = props.data.allMarkdownRemark.edges
      .map(item => item.node.frontmatter.category)
      .filter(function(elem, index, self) {
        return index === self.indexOf(elem);
      });

    this.state = { categories };

    categories.forEach(category => {
      this.state[`open${category}`] = false;
    });
  }

  openSubject = subject => () =>
    this.setState(oldState => ({
      ["open" + subject]: !oldState["open" + subject]
    }));

  render = () => {
    const pages = this.props.data.allMarkdownRemark.edges;

    return (
      <div className="indexContainer">
        {this.state.categories.map(category => (
          <Subject
            title={category}
            onClick={this.openSubject(category)}
            open={this.state[`open${category}`]}
            category={category}
            pages={pages}
          />
        ))}
      </div>
    );
  };
}

export default IndexPage;

export const query = graphql`
  query LayoutQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          frontmatter {
            title
            index
            category
          }
        }
      }
    }
  }
`;
