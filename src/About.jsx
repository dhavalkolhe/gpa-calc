import React from "react";
import "./About.css";
import logo from "./about.png";

function About() {
  return (
    <div className="row mx-auto">
      <div className="col-lg-5">
        <h1>About GPA Calculator</h1>
        <br />
        <p>
          lorem ipsum cnzjdncjlznjfncljka cznl vcjl zvzlnvlj jnn jlz jlzn jlz z
          jlz jklzn lnzl klz nlznln kzkl lznl z lndlcnzlclkz
        </p>
      </div>
      <div className="col-lg-5 image">
        <img src={logo} alt="img" />
      </div>
      {/* <table>
        <tr>
          <td className="heading">
            <h1>About GPA Calculator</h1>
            <p>
              lorem ipsum cnzjdncjlznjfncljka cznl vcjl zvzlnvlj jnn jlz jlzn
              jlz z jlz jklzn lnzl klz nlznln kzkl lznl z lndlcnzlclkz
            </p>
          </td>
          <td>
            <img src={logo} alt="img" />
          </td>
        </tr>
      </table> */}
    </div>
  );
}

export default About;
