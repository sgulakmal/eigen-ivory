import React from "react";
import logo from "../../Assests/logo-forcontact.svg";
import style from "./Contacts.module.scss";
import facebookIcon from "../../Assests/facebook-icon.svg";
import twitterIcon from "../../Assests/twitter-icon.svg";
import { InstagramOutlined, WhatsAppOutlined } from "@ant-design/icons";

function Contact() {
  return (
    <div className={style.main_contact_content}>
      <div className="contact-section" id="section1">
        <div className="contact-logo-cont">
          <img src={logo} alt="Logo" />
        </div>
        <p>Seamless Control with EigenIvory’s Remote IT Teams</p>
      </div>
      <div className="contact-section" id="section2">
        <div>
          <h3>EigenIvory Connection</h3>
          <p>34 Major Lalaka Fernando Mw, Kapuwatta,</p>
          <p>Ja-ela 11350</p>
          <p>Sri Lanka</p>
        </div>
        <div>
          <p>+94 11 222 7316</p>
          <p>+94 77 714 7280</p>
          <p>info@eigenivory.com</p>
          <p>
            <a href="http://www.eigenivory.com">www.eigenivory.com</a>
          </p>
        </div>
      </div>
      <div className="contact-section" id="section3">
        <div>
          <h3>EigenGlobal Connection</h3>
          <p>35 Colebrook Road,</p>
          <p>Shirley, Solihull,</p>
          <p>West Midlands B90 2LB</p>
          <p>United Kingdom</p>
        </div>
        <div>
          <p>+44 1216240159</p>
          <p>+44 77 3730 5424</p>
          <p>info@eigenglobal.com</p>
          <p>
            <a href="http://www.eigenglobal.com">www.eigenglobal.com</a>
          </p>
        </div>
      </div>
      <div className="contact-section" id="section4">
        <div>
          <h3>Connect with us</h3>
          <div className="icon-container">
            <div className="icon-sub-container">
              <img src={facebookIcon} alt="facebookIcon" />
            </div>
            <div className="icon-sub-container">
              <img src={twitterIcon} alt="twitterIcon" />
            </div>
            <div className="icon-sub-container">
              <InstagramOutlined
                style={{ fontSize: "20px", color: "#B1B6BE" }}
              />
            </div>
            <div className="icon-sub-container">
              <WhatsAppOutlined
                style={{ fontSize: "20px", color: "#B1B6BE" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
