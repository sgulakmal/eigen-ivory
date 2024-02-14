import React from "react";
import "./about.css";
import { Col, Row } from "antd";

function About() {
  return (
    <div className="main-about-content">
      <div className="about-title">
        <h3>ABOUT</h3>
      </div>
      <div className="grid-section-1">
        <div className="item1-section">
          <p>Resourcing your business for the competitive edge</p>
        </div>
        <div className="item2-section">
          <p>
            EigenIvory is a Sri Lankan registered private limited company and is
            the outsourcing arm of the UK based
            <span className="highlight"> EigenGlobal</span> group. We as a
            company provide you with a wide range of innovative outsourcing
            models. EigenIvory is your premier choice for extended IT teams. We
            prioritize delivering the right skills mix to perfectly align with
            your business requirements. With our expertise and ample resources,
            we ensure a job well done, every time.
          </p>
        </div>
      </div>
      <Row className="grid-section-2">
        <Col className="vision-content">
          <h3>Vision</h3>
          <p>
            Our vision is to become a preeminent resource provider in the
            software development and information technology industry, celebrated
            for our delivery of exceptional, skills, talent that empower our
            clients to reach their business objectives with excellence.
          </p>
        </Col>
        <Col className="mission-content">
          <h3>Mission</h3>
          <p>
            Our mission is to introduce innovative skill outsourcing models and
            deliver a perfect mix of talented resources that are meticulously
            crafted to address our clients' unique requirements. We are
            committed to upholding the utmost professionalism, expertise, and
            transparency, ensuring that our clients receive the highest standard
            of service.
          </p>
        </Col>
        <Col className="strategy-content">
          <h3>Mission</h3>
          <p>
            Through our Sourcing Readiness Assessment (SRA), we evaluate your
            outsourcing goals, including feasibility, opportunity assessment,
            cost savings, strategic alignment, and provide you actionable
            recommendations. Our objective is to empower your organization with
            insights and tools for informed decisions, optimized outsourcing
            returns, and business growth.
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default About;
