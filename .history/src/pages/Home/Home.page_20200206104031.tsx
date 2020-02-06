import React from "react";
import "./Home.styles.scss";

import MainContentSection from "../../components/MainContentSection/MainContentSection.component";

const Home = () => {
  return (
    <div className="home">
      <main role="main" className="main-content">
        <MainContentSection />
      </main>
    </div>
  );
};

export default Home;
