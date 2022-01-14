import React from 'react';
import './About.css';
import logo from '../../assets/about.png';

function About() {
    return (
        <div className="about">
            <div className="about__heading-container">
                <h3 className="about__heading">About Us</h3>
                <div className="about__heading-link">
                    <a href="/" className="about__link">
                        vitrendz.com
                    </a>
                </div>
            </div>
            <p className="about__text">
                VITrendz is cofounded by a group of individuals who strive to
                make lives at VIT easier. It is an organization that helps
                students at VIT by providing them various services and academic
                resources. It provides entertainment, study materials,
                interactive help and a vast stream of other facilities to
                VITians based on their changing requirements.
            </p>
        </div>
    );
}

export default About;


{/* <div className="row mx-auto">
            <div className="col-lg-5">
                <h1 className="main-heading">About GPA Calculator</h1>
                <br />
                <p>
                    <ul>
                        <li>
                            <span>
                                Find out your GPA of any semester based on your
                                grades
                            </span>
                        </li>
                        <li>
                            <span>
                                Calculate your CGPA based on your credits and
                                GPA of previous semesters
                            </span>
                        </li>
                        <li>
                            <span>
                                Figure out how much you need to score to pass
                                your theory/lab component
                            </span>
                        </li>
                    </ul>
                </p>
            </div>
            <div className="col-lg-5 image">
                <img src={logo} alt="img" />
            </div>
        </div> */}