import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "../components/Header";
import "./index.css";
import "./github-markdown.css";
// import "./katex.min.css";

const TemplateWrapper = ({ children }) => (
  <div className="main">
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
        // {
        //   href:
        //     "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0-beta1/katex.min.css",
        //   rel: "stylesheet"
        // }
      ]}
    />
    <Header />
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
