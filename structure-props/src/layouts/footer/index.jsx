import React from "react";
import Button from "../../components/button";
import "./index.scss";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <h1>Footer</h1>
          <Button text={"footer-btn"} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
