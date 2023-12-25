import React from "react";
import "./index.scss";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { GoClock } from "react-icons/go";

const Header = () => {
  return (
    <header>
      <div id="header-top">
        <div class="container">
          <div class="header-top">
            <div class="header-text">
              <GoClock  className="icons"/>
              <p>MON - SAT: 6.00 AM - 10.00 PM</p>
              <p>SUN: CLOSED</p>
            </div>
            <div class="header-icons">
              <FaFacebookF className="icons" />
              <FaTwitter className="icons" />
              <FaLinkedin className="icons" />
              <FaGooglePlus className="icons" />
            </div>
          </div>
        </div>
      </div>
      <div id="header-bottom">
        <div class="container">
          <div class="header-bottom">
            <h1>
              Consulting <span>.</span>
            </h1>
            <nav>
              <ul>
                <li>
                  <a href="./index.html">Home</a>
                </li>
                <li>
                  <a href="./about.html">About</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="./contact.html">Contact</a>
                </li>
              </ul>
            </nav>
            <IoMenu className="menu-icon" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
