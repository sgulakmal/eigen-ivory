import React from "react";
import style from "./PartnersAndMemberships.module.scss";
import { useMediaQuery } from "react-responsive";
import { Col, Row, Space } from "antd";
// import partnersmembers from '../../Assests/partners-members.svg'
// import starmanconsotium from '../../Assests/starman-consortium.svg'
// import enricharcane from '../../Assests/enrich-arcane.svg'
// import lankalab from '../../Assests/lanka-lab.svg'
// import fetchseed from '../../Assests/fetch-seed.svg'
// import siyanomo from '../../Assests/siyanomo.svg'

function PartnersandMemberships() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const title = "Our Valued Partner Customers: Fueling Collective Success";
  const description =
    "Our partners are an integral part of our success story. We value their expertise, insights, and contributions, which enrich our solutions and broaden our capabilities. Through collaborative efforts, we forge strong alliances built on trust, transparency, and shared goals. Together, we navigate the ever-changing landscape of technology and industry trends, driving innovation and staying one step ahead. Our partners' diverse perspectives and specialized knowledge enable us to deliver comprehensive, tailored solutions that exceed client expectations. With open lines of communication and a commitment to mutual growth, we cultivate long-lasting partnerships that fuel our collective success in delivering high-quality, customized solutions to our clients.";
  return (
    <>
      {isMobile ? (
        <div className={style.mobile}>
          <div className={style.main_content}>
            <div className={style.about_title}>
              <h3>PARTNERS & MEMBERSHIPS</h3>
            </div>
            <Space direction="vertical">
              <div className={style.title}>{title}</div>
              {description}
            </Space>
          </div>
        </div>
      ) : (
        <div className={style.desktop}>
          <div className={style.main_content}>
            <Row
              gutter={{
                xs: 1,
                sm: 16,
                md: 24,
                lg: 32,
              }}
            >
              <Col>
                <div className={style.main_title}>
                  <h3>PARTNERS & MEMBERSHIPS</h3>
                </div>
              </Col>
              <Col span={24}>
                <Row style={{}}>
                  <Col span={8} className={style.title}>
                    {title}
                  </Col>
                  <Col span={12} offset={4} className={style.title_description}>
                    {description}
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      )}
    </>
  );
}

export default PartnersandMemberships;
