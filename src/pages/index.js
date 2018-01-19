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
        {/* <Subject
          title="Filosofia"
          onClick={this.openSubject("Filosofia")}
          open={this.state.openFilosofia}
          path="filosofia"
          pages={pages}
        />

        <Subject
          title="Storia"
          onClick={this.openSubject("Storia")}
          open={this.state.openStoria}
          pages={pages}
          path="storia"
        />
        <Subject
          title="Storia dell'Arte"
          onClick={this.openSubject("StoriaArte")}
          open={this.state.openStoriaArte}
          pages={pages}
          path="storia-arte"
        />
        <Subject
          title="Italiano"
          onClick={this.openSubject("Italiano")}
          open={this.state.openItaliano}
          pages={pages}
          path="italiano"
        />
        <Subject
          title="Latino"
          onClick={this.openSubject("Latino")}
          open={this.state.openLatino}
          path="latino"
          pages={pages}
          path="latino"
        />
        <Subject
          title="Matematica"
          onClick={this.openSubject("Matematica")}
          open={this.state.openMatematica}
          pages={pages}
          path="matematica"
        />
        <Subject
          title="Fisica"
          onClick={this.openSubject("Fisica")}
          open={this.state.openFisica}
          pages={pages}
          path="fisica"
        />
        <Subject
          title="English literature"
          onClick={this.openSubject("English")}
          open={this.state.openEnglish}
          pages={pages}
          path="english"
        /> */}
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
