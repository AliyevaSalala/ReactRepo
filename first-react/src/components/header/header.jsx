import React from "react";
import { FaPersonDigging } from "react-icons/fa6";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="header">
          <div className="icon">
            <FaPersonDigging  className="settingsIcon"/>
            <h1>Electrochip</h1>
          </div>

          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Service</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
