import React from "react";
import "./Values.module.scss";
import excellenceIcon from "../../Assests/excellence-icon.svg";
import innovationIcon from "../../Assests/innovation-icon.svg";
import collaborationIcon from "../../Assests/collaboration-icon.svg";
import integrityIcon from "../../Assests/integrity-icon.svg";
import professionalismIcon from "../../Assests/professionalism-icon.svg";

function Values() {
  return (
    <div className="main-values-content">
      <div className="values-title-cont">
        <h3>Values</h3>
      </div>
      <div className="values-def-cont">
        <p>
          Our core values inspire us un everything we do, permeating every
          aspect of our operations and driving us towards fulfilling our
          mission. With an unwavering commitment to excellence, we consistently
          deliver top-tier, tailored solutions to our clients.
        </p>
      </div>
      <div className="values-section">
        <div className="excellence-content">
          <div className="values-icon">
            <img src={excellenceIcon} alt="excellence-icon" />
          </div>
          <div className="values-text">
            <h3>Excellence</h3>
            <p>
              We consistently strive for excellence, upholding the highest
              standards of quality and professionalism.
            </p>
          </div>
        </div>
        <div className="innovation-content">
          <div className="values-icon">
            <img src={innovationIcon} alt="innovation-icon" />
          </div>
          <div className="values-text">
            <h3>Innovation</h3>
            <p>
              We remain at the forefront of technology and industry trends,
              delivering innovative solutions that empower our clients to
              outpace the competition.
            </p>
          </div>
        </div>
        <div className="collaboration-content">
          <div className="values-icon">
            <img src={collaborationIcon} alt="collaboration-icon" />
          </div>
          <div className="values-text">
            <h3>Collaboration</h3>
            <p>
              We value the power of collaboration, closely partnering with our
              clients to understand their needs and goals, developing tailored
              solutions to meet those requirements.
            </p>
          </div>
        </div>
        <div className="integrity-content">
          <div className="values-icon">
            <img src={integrityIcon} alt="integrity-icon" />
          </div>
          <div className="values-text">
            <h3>Integrity</h3>
            <p>
              We conduct business with unwavering integrity and transparency,
              treating our clients, partners, and team members with honesty,
              respect, and fairness.
            </p>
          </div>
        </div>
        <div className="professionalism-content">
          <div className="values-icon">
            <img src={professionalismIcon} alt="professionalism-icon" />
          </div>
          <div className="values-text">
            <h3>Professionalism</h3>
            <p>
              We embody professionalism, fostering strong and enduring
              relationships with our clients based on trust, respect, and open
              communication.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Values;
