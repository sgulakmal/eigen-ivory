import React from "react";
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
          We assist technology-driven companies in achieving rapid and valuable delivery by implementing top-tier outsourcing solutions and skills to remove obstacles for in-house teams.
          </p>
        </div>
      </>
    );
  };

  return (
    <>
      {isMobile ? (
        <div className={style.mobile}>{detailsElement()}</div>
      ) : (
        <div className={style.desktop}>
          <div className={style.start_up_text}>
            {detailsElement()}
          </div>
        </div>
      )}
    </>
  );
}

export default Startup;
