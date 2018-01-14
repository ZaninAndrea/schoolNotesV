import React from "react";
import Link from "gatsby-link";

const Header = () => (
  <div className="header">
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "1.45rem 1.0875rem"
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          Appunti V
        </Link>
      </h1>
    </div>
  </div>
);

export default Header;
