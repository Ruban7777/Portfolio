import React, { useContext } from "react";
import "./Projects.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import portfolio from "../assets/portfolio.jpg";
import factory from "../assets/food-factory.jpg";
import recipe from "../assets/recipe-app.jpg";
import asd from "../assets/ASD.jpg";
import swipe from "../assets/swipe.png";

const Projects = () => {
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span>Projects</span>
      <span>
        {/* I take pride in paying attention to the smallest details and making sure
        that my work is pixel perfect. I am excited to bring my skills and
        experience to help in the development of society. */}
        I take great satisfaction in making sure that even the tiniest details
        are taken care of and that my work is flawless. I can't wait to
        contribute my knowledge and expertise to the advancement of society.
      </span>

      {/* <button className="swipebtn" style={{ float: "left" }}>
        Swipe left
      </button> */}

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <p>Portfolio Website</p>
          <img src={portfolio} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <p>Food Factory Management System</p>
          <img src={factory} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <p>Recipe app</p>
          <img src={recipe} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <p>Autism Detector APP</p>
          <img src={asd} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Projects;
