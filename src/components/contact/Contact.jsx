// import React from "react";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsTwitter } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        // "YOUR_SERVICE_ID"
        // "YOUR_TEMPLATE_ID",
        // "YOUR_PUBLIC_KEY"
        "service_t75ewwm",
        "template_aiupo1d",
        form.current,
        "sOrNMCZr1ZxJMh0OL"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>sethmegbetor@gmail.com</h5>
            <a
              href="mailto:sethmegbetor@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsTwitter className="contact__option-icon" />
            <h4>Twitter</h4>
            <h5>@realCodeMVP</h5>
            <a
              href="https://twitter.com/realCodeMVP"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+233 247 577 679</h5>
            <a
              href="https://wa.me/+233247577679"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your full name" />
          <input type="text" name="email" placeholder="Your email" />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
      .
    </section>
  );
};

export default Contact;
