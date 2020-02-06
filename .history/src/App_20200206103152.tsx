import React from "react";
import "./App.scss";

import Home from "./pages/Home/Home.page";
import Header from "./components/Header/Header.component";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Home />
    </div>
  );
};

export default App;
