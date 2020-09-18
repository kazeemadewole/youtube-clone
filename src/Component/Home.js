import React from "react";
import Sidebar from "./Sidebar";
import Maincontent from "./MainContent";
import "./Home.css";

const Home = () => {
  return (
    <div className="row">
      <div className="container">
        <div className="row">
          <Sidebar />
          <Maincontent />
        </div>
      </div>
    </div>
  );
};

export default Home;
