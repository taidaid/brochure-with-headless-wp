import React from "react";
import "./Header.styles.scss";
import logo from "../../logo.svg";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} className="logo" alt="logo" />
      <p>
        This brochure is intended to be served content from a headless
        Wordpress.
      </p>
    </header>
  );
};

export default Header;
