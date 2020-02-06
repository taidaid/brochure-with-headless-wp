import React from "react";

import MainContentSection from "components/MainContentSection/MainContentSection.component";
import Header from "components/Header/Header.component";

const Home = () => {
  return (
    <div className="App">
      <Header />
      <main role="main" className="main-content">
        <MainContentSection />
      </main>
    </div>
  );
};

export default Home;
