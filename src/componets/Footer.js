import React from "react";
import Logo from "../assets/img/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="f-container">
        <div className="row">
          <div className="col-lg">
            <div className="f-space">
              <div className="footer-logo-area">
                <img src={Logo} alt="logo" className="logo" />
                <h5 className="footer-details mt-4">
                  Your goal is our target. Not anything in between. We use
                  online marketing platforms and tools to achieve single
                  objective - your business results.
                </h5>
              </div>
            </div>
          </div>

          <div className="col-md">
            <div className="footer-tech">
              <h4 className="footer-header">Our Technologies</h4>
              <h5 className="footer-text">ReactJs</h5>
              <h5 className="footer-text">Gatsby</h5>
              <h5 className="footer-text">NextJS</h5>
              <h5 className="footer-text">NodeJS</h5>
            </div>
          </div>

          <div className="col-md">
            <div className="footer-services">
              <h4 className="footer-header">Our Services</h4>
              <h5 className="footer-text">Social media Marketing</h5>
              <h5 className="footer-text">Web & Mobile App Development</h5>
              <h5 className="footer-text">Data & Analytics</h5>
            </div>
          </div>
        </div>
        <div className="footer-space-hight">
          <hr className="footer-hr" />
          <div className="footer-policy">
            <h5 className="footer-text text-center">
              Privacy Policy | Terms & Conditions
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
