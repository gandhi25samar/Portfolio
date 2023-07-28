import React from "react";
import { MdOutlineEmail, MdOutlineWhatsapp } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";

import "./contact.css";
const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>gandhi25samarjeet@gmail.com</h5>
            <a
              href="mailto:gandhi25samarjeet@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <BsLinkedin className="contact_option-icon" />
            <h4>LinkedIn</h4>
            <h5>Samarjeet Singh Gandhi</h5>
            <a
              href="https://www.linkedin.com/in/samarjeet-singh-gandhi-4299b6224/"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <MdOutlineWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>+91 9455420816</h5>
            <a
              href="https://api.whatsapp.com/send?phone=9455420816"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        <form
          action="https://getform.io/f/fbd3f08a-ed56-4bc0-b0a2-53b5b5682082"
          method="POST"
        >
          <input
            type="text"
            name="name"
            placeholder=" Your Full Name"
            required
          />
          <input type="email" name="email" placeholder=" Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder=" Your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
