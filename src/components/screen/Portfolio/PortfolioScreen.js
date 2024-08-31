import React from "react";
import "./Portfolio.css";

import Img1 from "../../../assets/img1.jpg";
import Img2 from "../../../assets/img2.jpg";
import Img3 from "../../../assets/img3.jpg";
import Img4 from "../../../assets/img4.jpg";
import Img5 from "../../../assets/img5.jpg";
import Img6 from "../../../assets/img6.jpg";
import Img7 from "../../../assets/img7.jpg";
import Img8 from "../../../assets/img8.jpg";
import Img9 from "../../../assets/img9.jpg";
import { Alert } from "@mui/material";

function PortfolioScreen() {
  return (
    <section id="works">
      <span className="worksTitle">My Portfolio</span>
      <span className="worksDes">
        I take pride in my meticulous attention to detail and ensuring that
        every aspect of my work is pixel-perfect. I'm excited to leverage my
        skills and experience to help businesses achieve their goals and
        establish a robust online presence.
      </span>
      <div className="workImgs">
        <img src={Img1} alt="Img1" className="workImg" />
        <img src={Img2} alt="Img2" className="workImg" />
        <img src={Img3} alt="Img3" className="workImg" />
        <img src={Img4} alt="Img4" className="workImg" />
        <img src={Img5} alt="Img5" className="workImg" />
        <img src={Img6} alt="Img6" className="workImg" />
      </div>
      <button className="seeMore">See more</button>
    </section>
  );
}

export default PortfolioScreen;
