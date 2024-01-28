import React from "react";
import aboutImage from "../../assets/images/our-story-01 (1).jpg";
import "./index.scss";

const AboutSection = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about-section">
          <div className="about-section-right">
            <h5>Italian Restaurant</h5>
            <h1>WELCOME</h1>
            <p>
              Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est.
              Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi,
              ac facilisis ligula sem id neque.
            </p>
            <button>Our Story </button>
          </div>
          <div className="about-section-left">
            <img src={aboutImage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
