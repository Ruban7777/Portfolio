import React from "react";
import "./Skills.css";
import WebImg from "../assets/Websitelogo.jpg";
import AppImg from "../assets/Applogo.jpg";
import AiImg from "../assets/AiImg.png"; // Ensure the file extension is correct

export const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
      I am a skilled and passionate AIML Engineer with strong skills in
        software development. I aspire to make meaningful contributions to
        various fields of technology. My goal is to work on projects that have a
        positive impact on society. The ever-evolving nature of technology
        motivates me to be a lifelong learner. Come along with me, and let's
        explore the endless possibilities that the world of technology has to
        offer!
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={WebImg} alt="Web Development" className="skillBarImg" />
          <div className="skillbarText">
            <h2>Web Development</h2>
            <p>
              Experience in building websites using HTML, CSS, JavaScript,
              ReactJS, and Tailwind CSS.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppImg} alt="App Development" className="skillBarImg" />
          <div className="skillbarText">
            <h2>App Development</h2>
            <p>
              Experience in building mobile applications using Android Studio.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AiImg} alt="AI Development" className="skillBarImg" />
          <div className="skillbarText">
            <h2>AIML</h2>
            <p>
              Skilled in building applications integrating AI/ML
              functionalities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
