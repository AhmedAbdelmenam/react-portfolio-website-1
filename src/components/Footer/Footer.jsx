import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="/#" className="footer_logo">
        Ahmed
      </a>
      <ul className="permalinks">
        <li>
          <a href="/#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experince">Experiance</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#Portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonial">Testimonial</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_social">
        <a href="https://www.facebook.com/" rel="noreferrer" target="_blank">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/" rel="noreferrer" target="_blank">
          <FiInstagram />
        </a>
        <a href="https://twitter.com/" rel="noreferrer" target="_blank">
          <BsTwitter />
        </a>
      </div>
      <div className="footet_copyright">
        <small>&copy; Eng:-Ahmed Abdelmenam. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
