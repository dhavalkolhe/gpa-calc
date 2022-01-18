import React from "react";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
      <div className="footer-main">
          <footer className="footer">
              <div className="footer__heading-container">
                  <h1 className="footer-heading">GPA Calculator</h1>
              </div>
              <div className="footer__content-container row">
                  <div className="footer__content-about col-md-3">
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
                                  Calculate your CGPA based on your credits and
                                  GPA of previous semesters
                              </span>
                          </li>
                          <li className="footer__content-about-list-item footer__text">
                              <span>
                                  Figure out how much you need to score to pass
                                  your theory/lab component
                              </span>
                          </li>
                      </ul>
                  </div>
                  <div className="footer__content-quick col-md-3">
                      <h3 className="footer__content-quick-heading footer__subheading">
                          Quick Links
                      </h3>
                      <div className="footer__content-links-container">
                          <a
                              href="https://groups.vitrendz.com/"
                              className="footer__content-quick-link footer__text"
                              target='_blank'
                              rel="noreferrer"
                          >
                              🔗 Community
                          </a>
                          <a
                              href="/"
                              className="footer__content-quick-link footer__text"
                              target='_blank'
                              rel="noreferrer"
                          >
                              🔗 Services
                          </a>
                          <a
                              href="/#about-us"
                              className="footer__content-quick-link footer__text"
                          >
                              🔗 About us
                          </a>
                      </div>
                  </div>
                  <div className="footer__content-contact-container col-md-3">
                      <h3 className="footer__content-contact-heading footer__subheading">
                          Contact us
                      </h3>
                      <p className="footer__content-contact">
                          <a href="mailto:vitrendzvellore@gmail.com">
                              vitrendzvellore@gmail.com
                          </a>
                      </p>
                  </div>
              </div>
          </footer>
          <div className="footer__content-copyright">
              © <span>{year}</span> All Rights Reserved
          </div>
          <br />
          <div className="footer__content-copyright">
              Made with 💚 by VITrendz
          </div>
      </div>
  );
}

export default Footer;
