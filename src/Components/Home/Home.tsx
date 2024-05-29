import React from "react";
import { Layout, Row, Col } from "antd";
import { Navbar } from "../Navigation";
import Startup from "../Startup";
import About from "../About";
import Values from "../Values";
import Services from "../Services";
import PartnersandMemberships from "../PartnersAndMemberships";
import Contact from "../Contacts";
import style from "./Home.module.scss";

const { Header, Content } = Layout;

function Homepage() {
  return (
    <Layout className="main_layout">
      <Header
        style={{
          // position: "sticky",
          // top: 0,
          zIndex: 1,
          height: "80px",
        }}
        className="display-area"
      >
        <Navbar />
      </Header>

      <Content>
        <div className={style.contentLayout}>
          <div className="display-area">
            <section>
              <Startup />
            </section>
            <section id="about" className={`${style.section} ${style.about}`}>
            <About />
          </section>
          <section className={style.section}>
            <Values />
          </section>
          <section
            className={`${style.section} ${style.service}`}
            id="services"
          >
            <Services />
          </section>
          <section className={style.section} id="partner">
            <PartnersandMemberships />
          </section>

          <section className={style.section} id="contact">
            <Contact />
          </section>
          </div>
        </div>
      </Content>
    </Layout>
  );
}
export default Homepage;
