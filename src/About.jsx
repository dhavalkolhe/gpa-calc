import React from "react";
import "./About.css";
import logo from "./about.png";

function About() {
  return (
    <div className="row mx-auto">
      <div className="col-lg-5">
        <h1 className="main-heading">About GPA Calculator</h1>
        <br />
        <p>
          <ul>
            <li><span>Find out your GPA of any semester based on your grades</span></li>
            <li><span>Calculate your CGPA based on your credits and GPA of previous semesters</span></li>
            <li><span>Figure out how much you need to score to pass your theory/lab component</span></li>
          </ul>
        </p>
      </div>
      <div className="col-lg-5 image">
        <img src={logo} alt="img" />
      </div>
    </div>
  );
}

export default About;
