import React from "react";
import "./certifications.css";
import cplus from "../../assets/cplusplus.png";
import java from "../../assets/Java_program.jpg";
import dms from "../../assets/DMS.png";
import pregrad from "../../assets/intern_pregrad.png";
import JP from "../../assets/JP_Virtual.png";
import webDev from "../../assets/webDev_certificate.png";
import finance from "../../assets/finance.png";
const Certifications = () => {
  const certificates = [
    {
      id: 1,
      src: cplus,
      title: "Introduction to Programming Using C++",
      href: "https://drive.google.com/file/d/140EEnY-wheHtRgLuht-kl76z4cvHvzDC/view?usp=drive_link",
    },
    {
      id: 2,
      src: java,
      title: "Programming in Java",
      href: "https://drive.google.com/file/d/1tKENhFqaaeQdQTay0D3rTfXJooS4BFIg/view?usp=drive_link",
    },
    {
      id: 3,
      src: dms,
      title: "Discrete Mathematics",
      href: "https://drive.google.com/file/d/1Y2j1xYErbN4tr1hmWSOofTcQMQcn1wbN/view?usp=drive_link",
    },
    {
      id: 4,
      src: pregrad,
      title: "Marketing Intern at Pregrad",
      href: "https://drive.google.com/file/d/1KRnPcJS0iPn8ufU2gAkL2Lsib3cPFD1H/view?usp=sharing",
    },
    {
      id: 5,
      src: JP,
      title: "Software Engineering Virtual Experience",
      href: "https://drive.google.com/file/d/164hwwUvtVrurdaDozYnuSjipbcGSsfJ0/view?usp=drive_link",
    },
    {
      id: 6,
      src: webDev,
      title: "Complete Web Dvelopement",
      href: "https://drive.google.com/file/d/1jL-TVYIkOUrguMO2NsbzrpSRMtn2_HHO/view?usp=drive_link",
    },
    {
      id: 7,
      src: finance,
      title: "Finance for Engineers",
      href: "https://drive.google.com/file/d/1bqDHLASnHBDzZO1C-wMDygxELA38YnDL/view?usp=drive_link",
    },
  ];
  return (
    <section id="certifications">
      <h5>My Recent Accreditations</h5>
      <h2>Certifications</h2>
      <div className="container certification_container">
        {certificates.map(({ id, href, src, title }) => (
          <article key={id} className="certification_item">
            <div className="certification_item-image">
              <img src={src} alt="" />
            </div>
            <h3>{title}</h3>
            <div className="certification_item-cta">
              <a
                href={href}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                View
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
