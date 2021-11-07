import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="big">
        <div className="small">
          <h5>Quick Links</h5>
          <p>Community</p>
          <p>Services</p>
          <p>About Us</p>
          <p>Others</p>
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
            <i class="fab fa-youtube fa-2x"></i>
            <i class="fab fa-linkedin fa-2x"></i>
            <i class="fab fa-telegram fa-2x"></i>
          </div>
        </div>
      </div>
      <div className="copy">
        <p>
          ©2021 Copyright:
          <a href="https://www.vitrendz.com/"> vitrendz.com</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
