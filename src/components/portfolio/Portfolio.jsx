import React from "react";
import "./portfolio.css";
import keeper from "../../assets/keeperApp.jpg";
import bhumi from "../../assets/bhumi.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      href_git: "https://github.com/gandhi25samar/Keeper.git",
      href_demo: "https://samar-keeper.netlify.app/",
      src: keeper,
      title: "Keeper App",
    },
    {
      id: 2,
      href_git: "https://github.com/gandhi25samar/Bhumi.git",
      href_demo: "https://samar-bhumi-ngo.netlify.app/",
      src: bhumi,
      title: "Bhumi NGO",
    },
  ];
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {portfolios.map(({ id, href_demo, href_git, src, title }) => (
          <article key={id} className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={src} alt="" />
            </div>
            <h3>{title}</h3>
            <div className="portfolio_item-cta">
              <a
                href={href_git}
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href={href_demo}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}

        {/* <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={bhumi} alt="" />
          </div>
          <h3>Bhumi NGO</h3>
          <a
            href="https://github.com/gandhi25samar/Bhumi.git"
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <a
            href="https://samar-bhumi-ngo.netlify.app/"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        </article> */}
      </div>
    </section>
  );
};

export default Portfolio;
