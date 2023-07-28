import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/heroImage_4.png";
import HeaderSocials from "./HeaderSocials";
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1 className="py-4 text-4xl">Samarjeet Singh Gandhi</h1>
        <h5 className="text-light pb-6">Full Stack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
