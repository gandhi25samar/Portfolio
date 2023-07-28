import React from "react";
import "./about.css";
import ME from "../../assets/MyImage.png.jpeg";
import { FaAward } from "react-icons/fa";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { PiCertificate } from "react-icons/pi";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img style={{ height: "100%" }} src={ME} alt="About" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Skills</h5>
              <small>5+ frameworks and languages</small>
            </article>
            <article className="about_card">
              <PiCertificate className="about_icon" />
              <h5>Certificates</h5>
              <small>5+ certifications</small>
            </article>
            <article className="about_card">
              <AiOutlineFolderOpen className="about_icon" />
              <h5>Projects</h5>
              <small>2</small>
            </article>
          </div>
          <p>
            My name is Samarjeet Singh Gandhi and I am a passionate and
            ambitious computer engineering student at Thapar Institute of
            Engineering and Technology, Patiala, with a deep-rooted love for
            programming and full-stack development. Over the years, I have honed
            my skills in various programming languages and frameworks, including
            C++, React, JavaScript, Java, HTML, CSS, and more. This versatility
            allows me to approach projects from multiple angles and come up with
            innovative solutions.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
