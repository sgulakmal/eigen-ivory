import React from "react";
import logo from "../../Assests/logo-forcontact.svg";
import style from "./Contacts.module.scss";
import facebookIcon from "../../Assests/facebook-icon.svg";
import twitterIcon from "../../Assests/twitter-icon.svg";
import { InstagramOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import { useMediaQuery } from "react-responsive";

function Contact() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const logoSection = () => {
    return (
      <Col className={style.contact_section} id="section1">
        <div className={style.contact_logo_cont}>
          <img src={logo} alt="Logo" />
        </div>
        <p>Seamless Control with EigenIvory’s Remote IT Teams</p>
      </Col>
    );
  };

  return (
    <Row
      className={`${style.main_contact_content} ${isMobile && style.mobile}`}
    >
      {!isMobile && logoSection()}
      <Col className={style.contact_section} id="section2">
        <h3>EigenIvory Connection</h3>
        <p>34 Major Lalaka Fernando Mw, Kapuwatta,</p>
        <p>Ja-ela 11350</p>
        <p>Sri Lanka</p>
        <br />
        <p>+94 11 222 7316</p>
        <p>+94 77 714 7280</p>
        <p>info@eigenivory.com</p>
        <p>
          <a href="http://www.eigenivory.com">www.eigenivory.com</a>
        </p>
      </Col>
      <Col className={style.contact_section} id="section3">
        <h3>EigenGlobal Connection</h3>
        <p>35 Colebrook Road,</p>
        <p>Shirley, Solihull,</p>
        <p>West Midlands B90 2LB</p>
        <p>United Kingdom</p>
        <br />

        <p>+44 1216240159</p>
        <p>+44 77 3730 5424</p>
        <p>info@eigenglobal.com</p>
        <p>
          <a href="http://www.eigenglobal.com">www.eigenglobal.com</a>
        </p>
      </Col>
      <Col className={style.contact_section} id="section4">
        <div>
          <h3>Connect with us</h3>
          <div className={style.icon_container}>
            <div className={style.icon_sub_container}>
              <img src={facebookIcon} alt="facebookIcon" />
            </div>
            <div className={style.icon_sub_container}>
              <img src={twitterIcon} alt="twitterIcon" />
            </div>
            <div className={style.icon_sub_container}>
              <InstagramOutlined
                style={{ fontSize: "20px", color: "#B1B6BE" }}
              />
            </div>
            <div className={style.icon_sub_container}>
              <WhatsAppOutlined
                style={{ fontSize: "20px", color: "#B1B6BE" }}
              />
            </div>
          </div>
        </div>
      </Col>
      {isMobile && logoSection()}
      <Col span={24} className={style.line}>
        <hr></hr>
        <p>© 2023 EigenIvory. All rights reserved.</p>
      </Col>
    </Row>
  );
}
export default Contact;
