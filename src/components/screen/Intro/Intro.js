import React from "react";
import "./Intro.css";
import bg from "../../../assets/Crop_img.png";
import hireme from "../../../assets/hireme.png";
import { Link } from "react-scroll";
import TextSwap from "../../Animations/SwapText";

const Intro = () => {
  const texts = ["Full Stack Developer", "Cross-Platform Developer"];

  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName"> Dilshan</span> <br />{" "}
          <TextSwap texts={texts} interval={3000} />
        </span>
        <p className="introPara">
          I'm a web and mobile app developer with a knack for creating sleek,
          user-friendly digital experiences.I specialize in building responsive
          websites and innovative apps that combine functionality with great
          design. Let’s create something extraordinary together!
        </p>
        <Link>
          <button className="btn">
            {" "}
            <img src={hireme} alt="hite me" className="hire" /> Hire me
          </button>
        </Link>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
