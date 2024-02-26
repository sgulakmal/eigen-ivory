
import React, { useEffect, useState } from "react";
import style from "./Services.module.scss";
import AgentImg from "../../Assests/skills/agent.svg";
import EiImg from "../../Assests/skills/ei.svg";
import SkillImg from "../../Assests/skills/skill.svg";
import TeamImg from "../../Assests/skills/team.svg";
import StepLine from "../StepLine";
import { useMediaQuery } from "react-responsive";
import { Col, Row } from "antd";

interface Skill {
  title: string;
  description: string;
  image: any;
}

function Services() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTabScreen = useMediaQuery({ query: "(max-width: 1024px)" });
  const title = "Explore innovative solutions we offer";

  const [skills, setSkills] = useState<Skill[]>([]);
  const [selecteSkillIndex, setSelecteSkillIndex] = useState<number>(0);

  useEffect(() => {
    setSkills([
      {
        title: "IvorySkills",
        description:
          "With IvorySkills , we provide you with skillful developers, quality assurance engineers, project managers and DevOps engineers to whatever extent you need. You will have full control over how they integrate with your team. We take care of recruitment, HR, legal and salary matters. We also take care of their working environment, leaving you with little to no hassle at all. We provide scalable solutions that fit your ever-changing needs.",
        image: SkillImg,
      },
      {
        title: "IvoryTeams",
        description:
          "IvoryTeams delivers dedicated remote IT teams specializing in your preferred technologies. You lead the hiring process and day-to-day project management, ensuring complete control of your extended team. Our remote resources seamlessly integrate with your in-house teams, processes, and tools, empowering your business to thrive.",
        image: TeamImg,
      },
      {
        title: "IvoryAgents",
        description:
          "IvoryAgents is aimed at IT resource recruitment agencies looking to expand into Sri Lanka. We would love to partner with you and share our flexible, innovative models, allowing you to seamlessly expand your recruitment into the island.",
        image: AgentImg,
      },
      {
        title: "EI Consultancy",
        description:
          "We provide individually tailored consultancy services to IT firms. Our more bespoke approach allows you to get the help you need when you need it. Our consultants have over 20 years of knowledge and experience in the industry and are eager to give you the push you need.",
        image: EiImg,
      },
    ]);
  }, []);

  const onHandleSelectStep = (index: number) => {
    setSelecteSkillIndex(index);
  };

  const skillImage = () => {
    return (
      <div className={style.skill_image}>
        <img className={isTabScreen && style.skill_image_for_tab} src={skills[selecteSkillIndex].image} alt="team-img" />
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
  );
}

export default Services;
