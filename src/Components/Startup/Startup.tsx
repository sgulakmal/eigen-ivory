import React from "react";
import style from "./Startup.module.scss";
import { Col, Row } from "antd";
import { useMediaQuery } from "react-responsive";
import valueUp from "../../Assests/value-up.svg";

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
      <div className={style.desktop}>
        <div className={style.start_up_text}>{detailsElement()}</div>
        <div className={style.box_group}>
          <div className={`${style.box_item} ${style.box_item1}`}>
            <h3 className={style.item_title}>IvorySkills</h3>
            <p className={style.item_details}>
              With IvorySkills, we take care of recruitment, HR, legal and
              salary matters.{" "}
            </p>
            <div className={style.item_value}>
              <span>2000+</span>
              <img src={valueUp} alt="Logo" />
            </div>
            <div className={style.item_foote}>
              <p>
                employees recruited worldwide
                <br />
                <a>More →</a>
              </p>
            </div>
          </div>
          <div className={`${style.box_item} ${style.box_item2}`}>
            <h3 className={style.item_title}>IvorySkills</h3>
            <p className={style.item_details}>
              With IvorySkills, we take care of recruitment, HR, legal and
              salary matters.{" "}
            </p>
            <div className={style.item_value}>
              <span>2000+</span>
              <img src={valueUp} alt="Logo" />
            </div>
            <div className={style.item_foote}>
              <p>
                employees recruited worldwide
                <br />
                <a>More →</a>
              </p>
            </div>
          </div>
          <div className={`${style.box_item} ${style.box_item3}`}>
            <h3 className={style.item_title}>IvorySkills</h3>
            <p className={style.item_details}>
              With IvorySkills, we take care of recruitment, HR, legal and
              salary matters.{" "}
            </p>
            <div className={style.item_value}>
              <span>2000+</span>
              <img src={valueUp} alt="Logo" />
            </div>
            <div className={style.item_foote}>
              <p>
                employees recruited worldwide
                <br />
                <a>More →</a>
              </p>
            </div>
          </div>
          <div className={`${style.box_item} ${style.box_item4}`}>
            <h3 className={style.item_title}>IvorySkills</h3>
            <p className={style.item_details}>
              With IvorySkills, we take care of recruitment, HR, legal and
              salary matters.{" "}
            </p>
            <div className={style.item_value}>
              <span>2000+</span>
              <img src={valueUp} alt="Logo" />
            </div>
            <div className={style.item_foote}>
              <p>
                employees recruited worldwide
                <br />
                <a>More →</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Startup;
