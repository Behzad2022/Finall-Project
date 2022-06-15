import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.jpg";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section id="footer">
      <div className="container footer">
        <div className="footer-box">
          <h4>Useful Links</h4>
          <div className="footer-links">
            <a href="#">&bull; Support</a>
            <a href="#">&bull; About</a>
            <a href="#">&bull; Learn</a>
            <a href="#">&bull; Hosting</a>
            <a href="#">&bull; Messenger</a>
          </div>
        </div>
        <div className="footer-box">
          <h4>Support</h4>
          <div className="footer-links">
            <a href="#">&bull; Support</a>
            <a href="#">&bull; About</a>
            <a href="#">&bull; Learn</a>
            <a href="#">&bull; Hosting</a>
            <a href="#">&bull; Messenger</a>
          </div>
        </div>
        <div className="footer-box">
          <h4>Contact Us</h4>
          <div className="footer-contact u-text-small">
            <p>
              <FaMapMarkerAlt /> &nbsp; Address: Canada.
            </p>
            <p>
              <FaPhoneAlt /> &nbsp; Phone: +1-514-1234-567.
            </p>
            <p>
              <FaFax /> &nbsp; Fax: +12342762178
            </p>
            <p>
              <FaEnvelope /> &nbsp; Email: behzad.hashemi@darioco.ca
            </p>
            <p>
              <FaGlobe /> &nbsp; Website: www.dayHvac.ca
            </p>
          </div>
        </div>
        <div className="footer-box">
          <img src={logo} alt="logo" width="171" height="53" />
          <p className="u-text-small">&copy; Copyright 2022.DarioCo.ca</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;

