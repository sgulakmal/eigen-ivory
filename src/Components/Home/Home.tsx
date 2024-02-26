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

// const scrollToSection = (sectionId) => {
//   var section = document.getElementById(sectionId);
//   if (section) {
//     section.scrollIntoView({ behavior: 'smooth' });
//   }
// }

function Homepage() {
  return (
    <Layout className="main_layout">
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          height: "80px",
        }}
      >
        <Navbar />
      </Header>

      <Content>
        <Row>
          <Col span={3}></Col>
          <Col span={18}>
            <section className={style.section}>
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
          </Col>
          <Col span={3}></Col>
        </Row>
        <section className={style.section} id="contact">
          <Contact />
        </section>
      </Content>
    </Layout>
  );
}
export default Homepage;

// import { Layout } from 'antd';
// import Navbar from '../Navigation/Navbar';
// import './home.scss'
// import background from '../../Assests/background-img.svg'
// import Startup from '../Startup/Startup';
// import About from '../About/About';
// import Values from '../Values/Values';
// import Services from '../Services/Services';
// import PartnersandMemberships from '../Partners&Memberships/Partners&Memberships'
// import Contact from '../Contacts/Contacts';

// const { Header, Content, Footer } = Layout;

// function Homepage() {

//     return (
//         <Layout className="main-layout" >
//             <Header>
//                 <Navbar/>
//             </Header>

//             <Content>
//                 <div className="background-img">
//                     <img src={background} alt="Logo" />
//                 </div>
//                 <Startup/>
//                 <About/>
//                 <Values/>
//                 <Services/>
//                 <PartnersandMemberships/>
//                 <Contact/>
//             </Content>

//             <Footer>
//                 <div className='footer-content'>
//                     <p>© 2023 EigenIvory. All rights reserved.</p>
//                 </div>
//             </Footer>
//         </Layout>
//     );
//   }

//   export default Homepage;
