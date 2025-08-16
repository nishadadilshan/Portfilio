import React from "react";
import "./Intro.css";
import bg from "../../../assets/Dilshan_Crop.png";
import hireme from "../../../assets/hireme.png";
import { Link } from "react-scroll";
import TextSwap from "../../Animations/SwapText";
import { useTheme } from "../../../context/ThemeContext";

const Intro = () => {
  const texts = ["Frontend Developer", "Full Stack Developer", "Cross-Platform Developer"];
  const { isDarkMode } = useTheme();

  return (
    <section id="intro" className={isDarkMode ? 'dark-theme' : 'light-theme'}>
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
          design. Let's create something extraordinary together!
        </p>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <button className={`btn ${isDarkMode ? 'dark-btn' : 'light-btn'}`}>
            {" "}
            <img src={hireme} alt="hire me" className="hire" /> Hire me
          </button>
        </Link>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
