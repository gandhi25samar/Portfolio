import React from "react";
import Header from "./components/header/header";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/portfolio/Portfolio";
import Certifications from "./components/certifications/Certifications";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
