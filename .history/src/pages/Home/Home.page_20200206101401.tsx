import React from "react";
import logo from "../../logo.svg";

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is the homepage header</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This brochure is intended to be served content from a headless
          Wordpress.
        </p>
      </header>
      <main role="main">
        <h2 className="App-main">This is the homepage main content</h2>
      </main>
    </div>
  );
};

export default Home;
