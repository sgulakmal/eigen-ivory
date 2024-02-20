import style from "./Services.module.scss";
import React, { useState } from "react";
import servicesbgimg from "../../Assests/services-bg-img.svg";
import sliderImg from "../../Assests/slider_temp.png";
import StepLine from "../StepLine";

function Services() {
  return (
    <StepLine></StepLine>
    // <div className={style.main_services_content}>
    //   <div className={style.services_title}>
    //     <h3>SERVICES</h3>
    //   </div>
    //   <div className={style.grid_section_1}>
    //     <div className={style.item1_section}>
    //       <p>Explore innovative solutions we offer</p>
    //     </div>
    //   </div>
    //   <div className={style.grid_section_2}>
    //     <div className={style.services_bgimg_cont}>
    //       <img src={servicesbgimg} alt="services-bg-img" />
    //     </div>
    //     <div className={style.ivorySkills_cont}>
    //       <img src={sliderImg} alt="team-img" />
    //       <h3>IvorySkills</h3>
    //       <p>
    //         With IvorySkills , we provide you with skillful developers, quality
    //         assurance engineers, project managers and DevOps engineers to
    //         whatever extent you need. You will have full control over how they
    //         integrate with your team. We take care of recruitment, HR, legal and
    //         salary matters. We also take care of their working environment,
    //         leaving you with little to no hassle at all. We provide scalable
    //         solutions that fit your ever-changing needs.
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Services;
