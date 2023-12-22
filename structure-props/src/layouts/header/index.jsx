import React from "react";
import Button from "../../components/button";
import "./index.scss";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header">
          <h1>Header</h1>
          <Button text={"header-btn"} />
        </div>
      </div>
    </header>
  );
};

export default Header;
