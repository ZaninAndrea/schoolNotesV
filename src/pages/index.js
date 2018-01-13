import React from "react";
import Link from "gatsby-link";

const IndexPage = () => (
  <div>
    <h1>Filosofia</h1>
    <Link to="/filosofia/fichte-schelling-hegel">Fichte, Schelling, Hegel</Link>
    <br />
    <Link to="/filosofia/schopenhauer">Schopenhauer</Link>
    <br />
  </div>
);

export default IndexPage;
