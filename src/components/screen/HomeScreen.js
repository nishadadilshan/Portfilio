import React from "react";
import Navbar from "../navbar/Navbar";
import Intro from "./Intro/Intro";
import AboutScreen from "./About/AboutScreen";
import PortfolioScreen from "./Portfolio/PortfolioScreen";
import ClientsandContact from "./ClientsandContactScreen/ClientsandContact";
import { Footer } from "../Footer/Footer";

function HomeScreen() {
  return (
    <div>
      <Navbar />
      <Intro />
      <AboutScreen />
      <PortfolioScreen />
      <ClientsandContact />
      <Footer />
    </div>
  );
}

export default HomeScreen;
