import React, { useRef } from "react";
import "./Contact.css";
import facebook from "../assets/facebook.png";
import insta from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import git from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x8o6vh8", // Replace with your actual service ID
        "template_9ob3rdg", // Replace with your actual template ID
        form.current,
        "nVZSqFSGkcpuVRnCe" // Replace with your actual public key
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          form.current.reset();
          alert("Email sent!!!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h1 className="contactTitle">Contact</h1>
      <span className="contactDesc">
        Please fill out the form below for communication
      </span>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          className="Name"
          placeholder="Your Name"
          name="your_name"
        />
        <input
          type="email"
          className="email"
          placeholder="Your Email"
          name="your_email"
        />
        <textarea
          className="msg"
          name="message"
          rows={5}
          placeholder="Message"
        ></textarea>
        <button className="submitBtn" type="submit">
          Submit
        </button>
        <div className="links">
          <a
            href="https://www.facebook.https://www.facebook.com/ruban.pais.73?mibextid=ZbWKwL"
            target="_blank"
            rel=''
          >
            <img src={facebook} alt="facebook" className="link" />
          </a>
          <a
            href="https://github.com/Ruban7777"
            target="_blank"
            rel="github"
            
          >
            <img src={git} alt="github" className="link" />
          </a>
          <a
            href="https://www.linkedin.com/in/ruban-christan-pais-3b98a3205?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="linkedin"
          >
            <img src={linkedin} alt="linkedin" className="link" />
          </a>
          <a
            href="https://x.com/ChristanPais?t=9zUX9DQxfQgOJRK8aF6JYw&s=09"
            target="_blank"
            rel="x"
            
          >
            <img src={twitter} alt="twitter" className="link" />
          </a>
          <a
            href="https://www.instagram.com/ruban_pais_7?igsh=MXdnbTloOTdwZmgxaQ=="
            target="_blank"
            rel="instgram"
          >
            <img src={insta} alt="instagram" className="link" />
          </a>
        </div>
      </form>
    </section>
  );
};

export default Contact;
