import React from "react";
import "./About.css";


function About() {
  return (
    <div className="about" id="about-us">
      <div className="about__heading-container">
        <h3 className="about__heading">About Us</h3>
        <div className="about__heading-link">
          <a
            href="https://vitrendz.com/"
            target="_blank"
            rel="noreferrer"
            className="about__link"
          >
            vitrendz.com
          </a>
        </div>
      </div>
      <p className="about__text">
        VITrendz is cofounded by a group of individuals who strive to make lives
        at VIT easier. It is an organization that helps students at VIT by
        providing them various services and academic resources. It provides
        entertainment, study materials, interactive help and a vast stream of
        other facilities to VITians based on their changing requirements.
      </p>
    </div>
  );
}

export default About;
