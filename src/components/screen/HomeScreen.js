import React from "react";
import Navbar from "../navbar/Navbar";
import Intro from "./Intro/Intro";
import AboutScreen from "./About/AboutScreen";
import PortfolioScreen from "./Portfolio/PortfolioScreen";
import ClientsandContact from "./ClientsandContactScreen/ClientsandContact";
import { Footer } from "../Footer/Footer";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

function HomeScreen() {
  return (
    <div>
      <Navbar />
      <Intro />
      <AboutScreen />
      <PortfolioScreen />
      <ClientsandContact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default HomeScreen;
