import style from "./Services.module.scss";
import React, { useEffect, useState } from "react";
import IvorySkillImg from "../../Assests/skills/Ivory.svg";
import StepLine from "../StepLine";
import { useMediaQuery } from "react-responsive";
import { Col, Row, Space } from "antd";

interface Skill {
  title: string;
  description: string;
  image: any;
}

function Services() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const title = "Explore innovative solutions we offer";

  const [skills, setSkills] = useState<Skill[]>([]);
  const [selecteSkillIndex, setSelecteSkillIndex] = useState<number>(0);

  useEffect(() => {
    setSkills([
      {
        title: "IvorySkills",
        description:
          "With IvorySkills , we provide you with skillful developers, quality assurance engineers, project managers and DevOps engineers to whatever extent you need. You will have full control over how they integrate with your team. We take care of recruitment, HR, legal and salary matters. We also take care of their working environment, leaving you with little to no hassle at all. We provide scalable solutions that fit your ever-changing needs.",
        image: IvorySkillImg,
      },
      {
        title: "IvoryTeams",
        description:
          "With IvorySkills , we provide you with skillful developers, quality assurance engineers, project managers and DevOps engineers to whatever extent you need. You will have full control over how they integrate with your team. We take care of recruitment, HR, legal and salary matters. We also take care of their working environment, leaving you with little to no hassle at all. We provide scalable solutions that fit your ever-changing needs.",
        image: IvorySkillImg,
      },
      {
        title: "IvoryAgents",
        description:
          "With IvorySkills , we provide you with skillful developers, quality assurance engineers, project managers and DevOps engineers to whatever extent you need. You will have full control over how they integrate with your team. We take care of recruitment, HR, legal and salary matters. We also take care of their working environment, leaving you with little to no hassle at all. We provide scalable solutions that fit your ever-changing needs.",
        image: IvorySkillImg,
      },
      {
        title: "EI Consultancy",
        description:
          "With IvorySkills , we provide you with skillful developers, quality assurance engineers, project managers and DevOps engineers to whatever extent you need. You will have full control over how they integrate with your team. We take care of recruitment, HR, legal and salary matters. We also take care of their working environment, leaving you with little to no hassle at all. We provide scalable solutions that fit your ever-changing needs.",
        image: IvorySkillImg,
      },
    ]);
  }, []);

  const onHandleSelectStep = (index: number) => {
    setSelecteSkillIndex(index);
  };

  const skillImage = () => {
    return (
      <div className={style.skill_image}>
        <img src={skills[selecteSkillIndex].image} alt="team-img" />
      </div>
    );
  };

  if (skills.length <= 0) {
    return "No skills found";
  }

  return (
    <>
      {isMobile ? (
        <div className={style.mobile}>
          <div className={style.services_title}>SERVICES</div>
          <div className={style.title}>{title}</div>
          <StepLine
            step={skills.map((i) => i.title)}
            selectedIndex={selecteSkillIndex}
            onSelectStep={onHandleSelectStep}
          ></StepLine>
          {skillImage()}
          <div className={style.skill_description}>
            <h3>{skills[selecteSkillIndex].title}</h3>
            <p>{skills[selecteSkillIndex].description}</p>
          </div>
        </div>
      ) : (
        <div className={style.desktop}>
          <div className={style.services_title}>SERVICES</div>
          <Row>
            <Col span={8} className={style.title}>
              {title}
            </Col>
            <Col span={16} className={style.title_description}>
              <StepLine
                step={skills.map((i) => i.title)}
                selectedIndex={selecteSkillIndex}
                onSelectStep={onHandleSelectStep}
              ></StepLine>
            </Col>
            <Col span={12}>{skillImage()}</Col>
            <Col span={12} className={style.skill_description}>
              <h3>{skills[selecteSkillIndex].title}</h3>
              <p>{skills[selecteSkillIndex].description}</p>
            </Col>
          </Row>
        </div>
      )}
    </>
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
