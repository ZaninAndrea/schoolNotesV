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

const Subject = ({ title, onClick, open, children }) => (
  <div className="subject">
    <SubjectHeader title={title} onClick={onClick} open={open} />
    {open ? <div>{children}</div> : ""}
  </div>
);

class IndexPage extends Component {
  constructor() {
    super();

    this.state = {
      openFilosofia: false,
      openStoria: false,
      openItaliano: false,
      openScienze: false,
      openFisica: false,
      openStoriaArte: false,
      openMatematica: false
    };
  }
  openSubject = subject => () =>
    this.setState(oldState => ({
      ["open" + subject]: !oldState["open" + subject]
    }));

  render = () => (
    <div className="notesContainer">
      <Subject
        title="Filosofia"
        onClick={this.openSubject("Filosofia")}
        open={this.state.openFilosofia}
      >
        <Link to="/filosofia/fichte-schelling-hegel" className="notesLink">
          Fichte, Schelling, Hegel
        </Link>
        <Link to="/filosofia/schopenhauer" className="notesLink">
          Schopenhauer
        </Link>
      </Subject>

      <Subject
        title="Storia"
        onClick={this.openSubject("Storia")}
        open={this.state.openStoria}
      >
        Non ci sono ancora appunti
      </Subject>
      <Subject
        title="Storia dell'Arte"
        onClick={this.openSubject("StoriaArte")}
        open={this.state.openStoriaArte}
      >
        Non ci sono ancora appunti
      </Subject>
      <Subject
        title="Italiano"
        onClick={this.openSubject("Italiano")}
        open={this.state.openItaliano}
      >
        Non ci sono ancora appunti
      </Subject>
      <Subject
        title="Latino"
        onClick={this.openSubject("Latino")}
        open={this.state.openLatino}
      >
        Non ci sono ancora appunti
      </Subject>
      <Subject
        title="Matematica"
        onClick={this.openSubject("Matematica")}
        open={this.state.openMatematica}
      >
        Non ci sono ancora appunti
      </Subject>
      <Subject
        title="Fisica"
        onClick={this.openSubject("Fisica")}
        open={this.state.openFisica}
      >
        Non ci sono ancora appunti
      </Subject>
    </div>
  );
}

export default IndexPage;
