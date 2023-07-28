import React from "react";
import "./experience.css";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import c from "../../assets/c.png";
import cplus from "../../assets/cplus.png";
import github from "../../assets/github.png";
import java from "../../assets/java.png";
import node from "../../assets/node.png";
import react from "../../assets/react.png";
import sql from "../../assets/sql.png";
import tailwind from "../../assets/tailwind.png";
import javascript from "../../assets/javascript.png";
import bootstrap from "../../assets/bootstrap.png";
import mongoDB from "../../assets/mongoDB.png";
import python from "../../assets/python.png";

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I have</h5>
      <h2>Experience</h2>
      <div className="container experience_container">
        <div className="experience_programming">
          <h3>Programming</h3>
          <div className="experience_content">
            <article className="experience_details">
              <img
                className="experience_details-icons"
                style={{ width: 20, height: 20 }}
                src={cplus}
                alt=""
              />
              <div>
                <h4>C++</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img
                className="experience_details-icons"
                style={{ width: 20, height: 20 }}
                src={c}
                alt=""
              />
              <div>
                <h4>C</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img
                className="experience_details-icons"
                style={{ width: 20, height: 20 }}
                src={java}
                alt=""
              />
              <div>
                <h4>Java</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img
                className="experience_details-icons"
                style={{ width: 20, height: 20 }}
                src={python}
                alt=""
              />
              <div>
                <h4>Python</h4>
                <small className="text-light">Basdic</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_frontend">
          <h3>Frontend Developement</h3>
          <div className="experience_content">
            <article className="experience_details">
              <img
                className="experience_details-icons"
                style={{ width: 20, height: 20 }}
                src={html}
                alt=""
              />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img
                className="experience_details-icons"
                style={{ width: 20, height: 20 }}
                src={css}
                alt=""
              />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img
                className="experience_details-icons"
                style={{ width: 20, height: 20 }}
                src={javascript}
                alt=""
              />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <img
                className="experience_details-icons"
                style={{ width: 20, height: 20 }}
                src={bootstrap}
                alt=""
              />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img
                className="experience_details-icons"
                style={{ width: 20, height: 20 }}
                src={tailwind}
                alt=""
              />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img
                className="experience_details-icons"
                style={{ width: 20, height: 20 }}
                src={react}
                alt=""
              />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>Backend Developement</h3>
          <div className="experience_content">
            <article className="experience_details">
              <img
                className="experience_details-icons"
                style={{ width: 20, height: 20 }}
                src={node}
                alt=""
              />
              <div>
                <h4>NodeJS</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience_details">
              <img
                className="experience_details-icons"
                style={{ width: 20, height: 20 }}
                src={mongoDB}
                alt=""
              />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience_details">
              <img
                className="experience_details-icons"
                style={{ width: 20, height: 20 }}
                src={sql}
                alt=""
              />
              <div>
                <h4>SQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <img
                className="experience_details-icons"
                style={{ width: 20, height: 20 }}
                src={github}
                alt=""
              />
              <div>
                <h4>GitHub</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
