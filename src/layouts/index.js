import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "../components/Header";
import "./index.css";
import "./github-markdown.css";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      meta={[
        { name: "description", content: "Appunti presi durante la V" },
        { name: "keywords", content: "appunti, quinta" }
      ]}
      link={[
        {
          href: "https://use.fontawesome.com/releases/v5.0.4/css/all.css",
          rel: "stylesheet"
        }
      ]}
    />
    <Header />
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "0px 1.0875rem 1.45rem",
        paddingTop: 0
      }}
    >
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
