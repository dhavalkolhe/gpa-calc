import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="big">
        <div className="small">
          <h5>Quick Links</h5>
          <a className="footer-links" href="https://community.vitrendz.com/">Community</a>
          <a className="footer-links" href="https://vitrendz.com/">Services</a>
          <a className="footer-links" href="https://vitrendz.com/">About Us</a>
          <a className="footer-links" href="https://resources.vitrendz.com/">Others</a>
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
            <a href="https://www.youtube.com/c/VITrendz"><i class="fab fa-youtube fa-2x"></i></a>
            <a href="https://www.linkedin.com/company/vitrendz"><i class="fab fa-linkedin fa-2x"></i></a>
            <a href="https://discord.gg/NGYYxdG8tj"><i class="fab fa-discord fa-2x"></i></a>
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
