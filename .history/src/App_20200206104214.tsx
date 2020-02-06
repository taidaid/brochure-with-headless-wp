import React from "react";
import "./App.scss";

import Home from "./pages/Home/Home.page";
import Header from "./components/Header/Header.component";

const App = () => {
  return (
    <div className="app">
      <Header />
      <main role="main" className="main-content">
        <Home />
      </main>
    </div>
  );
};

export default App;
