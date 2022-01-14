import React from 'react';
import footerBg from '../../assets/footer-svg.svg';
import './Footer.css';

function Footer() {
    return (
        <div className="footer-main">
            {/* <img className="footer-svg" src={footerBg} alt="footer-bg" /> */}
            <footer className="footer">
                <div className="footer__heading-container">
                    <h1 className="footer-heading">GPA Calculator</h1>
                </div>
                <div className="footer__content-container">
                    <div className="footer__content-about">
                        <h3 className="footer__content-about-heading footer__subheading">
                            About GPA Calculator
                        </h3>
                        <ul className="footer__content-about-list">
                            <li className="footer__content-about-list-item footer__text">
                                <span>
                                    Find out your GPA of any semester based on
                                    your grades
                                </span>
                            </li>
                            <li className="footer__content-about-list-item footer__text">
                                <span>
                                    Calculate your CGPA based on your credits
                                    and GPA of previous semesters
                                </span>
                            </li>
                            <li className="footer__content-about-list-item footer__text">
                                <span>
                                    Figure out how much you need to score to
                                    pass your theory/lab component
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__content-quick">
                        <h3 className="footer__content-quick-heading footer__subheading">
                            Quick Links
                        </h3>
                        <div className="footer__content-links-container">
                            <a
                                href="/"
                                className="footer__content-quick-link footer__text"
                            >
                                Community
                            </a>
                            <a
                                href="/"
                                className="footer__content-quick-link footer__text"
                            >
                                Services
                            </a>
                            <a
                                href="/"
                                className="footer__content-quick-link footer__text"
                            >
                                About us
                            </a>
                        </div>
                    </div>
                    <div className="footer__content-contact-container">
                        <h3 className="footer__content-contact-heading footer__subheading">
                            Contact us
                        </h3>
                        <p className="footer__content-contact">
                            <a href="/">help@vitrendz.tech</a>
                        </p>
                    </div>
                </div>
            </footer>
            <div className="footer__content-copyright">
                © 2022 All Rights Reserved{' '}
            </div>
        </div>
    );
}

export default Footer;

{
    /* <div className="footer">
            <div className="big">
                <div className="small">
                    <h5>Quick Links</h5>
                    <a
                        className="footer-links"
                        href="https://community.vitrendz.com/"
                    >
                        Community
                    </a>
                    <a className="footer-links" href="https://vitrendz.com/">
                        Services
                    </a>
                    <a className="footer-links" href="https://vitrendz.com/">
                        About Us
                    </a>
                    <a
                        className="footer-links"
                        href="https://resources.vitrendz.com/"
                    >
                        Others
                    </a>
                </div>
                <div className="small">
                    <h5>Address</h5>
                    <p>Men's Hostel, VIT Vellore</p>
                </div>
                <div className="small">
                    <h5>Contact Us</h5>
                    <a href="mailto:help@vitrendz.com">help@vitrendz.com</a>
                    <br />
                    <br />
                    <br />
                    <h5>Find us on:</h5>
                    <div className="icons">
                        <a href="https://www.youtube.com/c/VITrendz">
                            <i class="fab fa-youtube fa-2x"></i>
                        </a>
                        <a href="https://www.linkedin.com/company/vitrendz">
                            <i class="fab fa-linkedin fa-2x"></i>
                        </a>
                        <a href="https://discord.gg/NGYYxdG8tj">
                            <i class="fab fa-discord fa-2x"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="copy">
                <p>
                    ©2021 Copyright:
                    <a href="https://www.vitrendz.com/"> vitrendz.com</a>
                </p>
            </div>
        </div> */
}
