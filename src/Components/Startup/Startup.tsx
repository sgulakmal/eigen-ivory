import React from "react";
import teamImg from "../../Assests/team-img.svg";
import style from "./Startup.module.scss";
import { Col, Row } from "antd";
import { useMediaQuery } from "react-responsive";

function Startup() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const detailsElement = () => {
    return (
      <>
        <div className={style.text_container_1}>
          <h2>Offshore, Onshore and Nearshore Skill Outsourcing</h2>
        </div>
        <div className={style.text_container_2}>
          <p>
            From skilled developers to large development teams, we are here to
            provide you with what your company needs to grow.
          </p>
        </div>
      </>
    );
  };

  return (
    <>
      {isMobile ? (
        <div className={style.mobile}>
          {detailsElement()}
          <img
            src={teamImg}
            alt="team-img"
            style={{ width: "100%", height: "250px;" }}
          />
        </div>
      ) : (
        <div className={style.desktop}>
          <Row>
            <Col span={12} className={style.start_up_text}>
              {detailsElement()}
            </Col>
            <Col span={12}>
              <img
                src={teamImg}
                alt="team-img"
                style={{ width: "500px", height: "500px;" }}
              />
            </Col>
          </Row>
        </div>
      )}
    </>
  );
}

export default Startup;
