import React from "react";
import style from "./PartnersAndMemberships.module.scss";
import { useMediaQuery } from "react-responsive";
import { Card, Col, Row, Space } from "antd";
import enrichImg from "../../Assests/partners/enrich.svg";
import fetchseedImg from "../../Assests/partners/fetchseed.svg";
import lankaLabsImg from "../../Assests/partners/lanka-labs.svg";
import siyanmoImg from "../../Assests/partners/siyanmo.svg";
import starmanImg from "../../Assests/partners/starman.svg";

function PartnersandMemberships() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 400px)" });
  const title = "Our Valued Partner Customers: Fueling Collective Success";
  const description =
    "Our partners are an integral part of our success story. We value their expertise, insights, and contributions, which enrich our solutions and broaden our capabilities. Through collaborative efforts, we forge strong alliances built on trust, transparency, and shared goals. Together, we navigate the ever-changing landscape of technology and industry trends, driving innovation and staying one step ahead. Our partners' diverse perspectives and specialized knowledge enable us to deliver comprehensive, tailored solutions that exceed client expectations. With open lines of communication and a commitment to mutual growth, we cultivate long-lasting partnerships that fuel our collective success in delivering high-quality, customized solutions to our clients.";
  const partners = [
    { name: "Starman Consortium", image: starmanImg },
    { name: "Enrich Arcane", image: enrichImg },
    { name: "Lanka Labs Consultancies", image: lankaLabsImg },
    { name: "Fetch Seed", image: fetchseedImg },
    { name: "Siyanmo Technologies", image: siyanmoImg },
  ];

  return (
    <>
      {isMobile ? (
        <div className={style.mobile}>
          <div className={style.main_content}>
            <div className={style.partner_title}>
              <h3>PARTNERS & MEMBERSHIPS</h3>
            </div>
            <Space direction="vertical">
              <div className={style.title}>{title}</div>
              <div className={style.title_description}>{description}</div>
            </Space>
            <Row className={style.companies}>
              {partners.map((item, index) => (
                <Col
                  span={isSmallScreen ? 24 : 12}
                  key={index}
                  className={style.company_item}
                >
                  <Card
                    hoverable
                    style={{ width: 200, height: 250, marginTop: "10px" }}
                    cover={
                      <div className={style.company_image_wrapper}>
                        <img
                          className={style.company_image}
                          alt={item.name}
                          src={item.image}
                        />
                        <h3>{item.name}</h3>
                      </div>
                    }
                  ></Card>
                </Col>
              ))}
            </Row>
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
            <div className={style.companies}>
              {partners.map((item, index) => (
                <div key={index} className={style.company_item}>
                  <Card
                    hoverable
                    style={{ width: 240, height: 250, marginTop: "10px" }}
                    cover={
                      <div className={style.company_image_wrapper}>
                        <img
                          className={style.company_image}
                          alt={item.name}
                          src={item.image}
                        />
                        <h3>{item.name}</h3>
                      </div>
                    }
                  ></Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PartnersandMemberships;
