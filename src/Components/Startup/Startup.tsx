import React, { useState } from "react";
import style from "./Startup.module.scss";
import { Col, Row } from "antd";
import { useMediaQuery } from "react-responsive";
import valueUp from "../../Assests/value-up.svg";
import valueDown from "../../Assests/value-down.svg";
import { StartUpScreenItems } from "../../models/startup-screen-item";

function Startup() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [items] = useState<StartUpScreenItems[]>([
    {
      title: "IvorySkills",
      details:
        "With IvorySkills, we take care of recruitment, HR, legal and salary matters",
      value: "2200+",
      footerText: "employees recruited worldwide",
      link: "",
    },
    {
      title: "IvoryTeams",
      details:
        "Delivers dedicated remote IT teams specializing in your preferred technologies.",
      value: "30",
      footerText: "teams onboard at the moment",
      link: "",
    },
    {
      title: "IvoryAgents",
      details:
        "Aimed at IT resource recruitment agencies looking to expand into Sri Lanka.",
      value: "08",
      footerText: "agencies collaborating with us",
      link: "",
    },
    {
      title: "EI Consultancy",
      details:
        "Provides individually tailored consultancy services to IT firms. ",
      value: "30%",
      isValueDown: true,
      footerText: "of staff cost reduced",
      link: "",
    },
  ]);

  const itemsCssClass = [
    style.box_item1,
    style.box_item2,
    style.box_item3,
    style.box_item4,
  ];

  const detailsElement = () => {
    return (
      <>
        <div className={style.text_container_1}>
          <h2>Offshore, Onshore and Nearshore Skill Outsourcing</h2>
        </div>
        <div className={style.text_container_2}>
          <p>
            We assist technology-driven companies in achieving rapid and
            valuable delivery by implementing top-tier outsourcing solutions and
            skills to remove obstacles for in-house teams.
          </p>
        </div>
      </>
    );
  };

  return (
    <>
      {/* {isMobile ? (
        <div className={style.mobile}>{detailsElement()}</div>
      ) : (
        <div className={style.desktop}>
          <div className={style.start_up_text}>
            {detailsElement()}
          </div>
        </div>
      )} */}
      <div className={`${style.main} ${isMobile && style.mobile}`}>
        <div className={style.start_up_text}>{detailsElement()}</div>
        <div className={style.box_group}>
          {items.map((item, index) => {
            return (
              <div
                key={index}
                className={`${style.box_item} ${itemsCssClass[index]}`}
              >
                <h3 className={style.item_title}>{item.title}</h3>
                <p className={style.item_details}>{item.details}</p>
                <div className={style.item_value}>
                  <span className={item.isValueDown ? style.value_down :style.value_up}>{item.value}</span>
                  <img src={item.isValueDown ? valueDown: valueUp} alt="Value direction" />
                </div>
                <div className={style.item_foote}>
                  <p>
                    {item.footerText}
                    <br />
                    <a>More →</a>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Startup;
