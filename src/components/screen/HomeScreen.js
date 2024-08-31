import React from "react";
import Navbar from "../navbar/Navbar";
import Intro from "./Intro/Intro";
import AboutScreen from "./About/AboutScreen";
import PortfolioScreen from "./Portfolio/PortfolioScreen";

function HomeScreen() {
  return (
    <div>
      <Navbar />
      <Intro />
      <AboutScreen />
      <PortfolioScreen />
    </div>
  );
}

export default HomeScreen;
