import React from "react";
import "./footer.css";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
const Footer = () => {
  return (
    <footer>
      <a href="/#" rel="noreferrer" className="footer_logo">
        Samarjeet Singh Gandhi
      </a>
      <ul className="permalinks">
        <li>
          <a href="/#" rel="noreferrer">
            Home
          </a>
        </li>
        <li>
          <a href="#about" rel="noreferrer">
            About
          </a>
        </li>
        <li>
          <a href="#experience" rel="noreferrer">
            Experience
          </a>
        </li>
        <li>
          <a href="#portfolio" rel="noreferrer">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#certifications" rel="noreferrer">
            Certifications
          </a>
        </li>
        <li>
          <a href="#contact" rel="noreferrer">
            Contact
          </a>
        </li>
      </ul>
      <div className="footer_socials">
        <a
          href="https://www.instagram.com/samarjeet_singh25/"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/samarjeet-singh-gandhi-4299b6224/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/gandhi25samar"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Samarjeet Singh Gandhi. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
