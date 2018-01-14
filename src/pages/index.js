import React, { Component } from "react";
import Link from "gatsby-link";

class IndexPage extends Component {
  constructor() {
    super();

    this.state = {
      openFilosofia: false
    };
  }
  render = () => (
    <div>
      <h1
        onClick={() =>
          this.setState(({ openFilosofia }) => ({
            openFilosofia: !openFilosofia
          }))
        }
        className="subjectTitle"
      >
        {this.state.openFilosofia ? (
          <i className="fas fa-chevron-down" />
        ) : (
          <i className="fas fa-chevron-up" />
        )}{" "}
        Filosofia
      </h1>
      <div className="notesContainer">
        {this.state.openFilosofia ? (
          <div>
            <Link to="/filosofia/fichte-schelling-hegel">
              Fichte, Schelling, Hegel
            </Link>
            <br />
            <Link to="/filosofia/schopenhauer">Schopenhauer</Link>
            <br />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default IndexPage;
