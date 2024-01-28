import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa6";
import { CiMenuBurger } from "react-icons/ci";
import logo from "../../assets/images/logo (9).png";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/menu"}>Menu</NavLink>
              </li>
              <li>
                <NavLink to={"/form"}>Form</NavLink>
              </li>
              <li>
                <NavLink to={"/product"}>Porduct</NavLink>
              </li>
              <li>
                <NavLink to={"/blog"}>Blog</NavLink>
              </li>
            </ul>
          </nav>

          <div className="icons">
            <FaFacebookF className="header-icon" />
            <FaInstagram className="header-icon" />
            {/* <FaTwitter /> */}
          </div>
          <CiMenuBurger className="menu-icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
