import React from "react";
import Navbar from "../navbar/Navbar";
import Intro from "./Intro/Intro";
import AboutScreen from "./About/AboutScreen";
import PortfolioScreen from "./Portfolio/PortfolioScreen";
import ClientsandContact from "./ClientsandContactScreen/ClientsandContact";

function HomeScreen() {
  return (
    <div>
      <Navbar />
      <Intro />
      <AboutScreen />
      <PortfolioScreen />
      <ClientsandContact />
    </div>
  );
}

export default HomeScreen;
