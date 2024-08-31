import React from "react";
import Navbar from "../navbar/Navbar";
import Intro from "./Intro/Intro";
import AboutScreen from "./About/AboutScreen";

function HomeScreen() {
  return (
    <div>
      <Navbar />
      <Intro />
      <AboutScreen />
    </div>
  );
}

export default HomeScreen;
