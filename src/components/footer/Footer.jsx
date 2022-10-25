/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./footer.css";

import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer id="footer">
      <a href="" className="footer__logo">
        Seth Megbetor
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonial">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="linkedin">
          <BsLinkedin />
        </a>
        <a href="twitter">
          <BsTwitter />
        </a>
        <a href="instagram">
          <BsInstagram />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Seth Megbetor. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
