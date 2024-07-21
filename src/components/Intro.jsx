import React from "react";
import "./intro.css";
import photo from "../assets/photo.png";
import Hireimg from "../assets/HireImg.png";
import resume from "../assets/Ruban_Pais_Resume.pdf"; // Ensure this path is correct

export const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introname">Ruban</span>
          <br />
          Software Developer
        </span>
        <p className="introPara">
          I am an AIML Engineer and skilled software developer who <br />
          aspire to make meaningful contributions to various fields
          <br /> of technology. Come, along with me, and let's explore the{" "}
          <br />
          endless possibilities that the world of technology has to offer!
        </p>
        <a href={resume} target="_blank" rel="noopener noreferrer">
          <button className="btn">
            <img src={Hireimg} alt="Hire Me" className="btnImg" />
            Hire Me
          </button>
        </a>
      </div>
      <img src={photo} alt="background" className="bg" />
    </section>
  );
};

export default Intro;
