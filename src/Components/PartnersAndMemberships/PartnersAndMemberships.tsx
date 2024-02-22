import React from "react";
import style from "./PartnersAndMemberships.module.scss";
import { useMediaQuery } from "react-responsive";
// import partnersmembers from '../../Assests/partners-members.svg'
// import starmanconsotium from '../../Assests/starman-consortium.svg'
// import enricharcane from '../../Assests/enrich-arcane.svg'
// import lankalab from '../../Assests/lanka-lab.svg'
// import fetchseed from '../../Assests/fetch-seed.svg'
// import siyanomo from '../../Assests/siyanomo.svg'

function PartnersandMemberships() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  
  return (
    <div className={style.main_p_m_content}>
      <div className={style.p_m_title}>
        <h3>PARTNERS & MEMBERSHIPS</h3>
      </div>
      <div className={style.p_m_grid_section_1}>
        <div className={style.p_m_item1_section}>
          <p>Our Valued Partner Customers: Fueling Collective Success</p>
        </div>
        <div className={style.p_m_item2_section}>
          <p>
            Our partners are an integral part of our success story. We value
            their expertise, insights, and contributions, which enrich our
            solutions and broaden our capabilities. Through collaborative
            efforts, we forge strong alliances built on trust, transparency, and
            shared goals. Together, we navigate the ever-changing landscape of
            technology and industry trends, driving innovation and staying one
            step ahead. Our partners' diverse perspectives and specialized
            knowledge enable us to deliver comprehensive, tailored solutions
            that exceed client expectations. With open lines of communication
            and a commitment to mutual growth, we cultivate long-lasting
            partnerships that fuel our collective success in delivering
            high-quality, customized solutions to our clients.
          </p>
        </div>
      </div>
      <div className={style.p_m_imagecontainer}>
        {/* <img src={partnersmembers} alt="partners-and-members-img" /> */}
        {/* <img src={starmanconsotium} alt="starman-consotium-img" />
            <img src={enricharcane} alt="enrichar-cane-img" />
            <img src={lankalab} alt="lanka-lab-img" />
            <img src={fetchseed} alt="fetch-seed-img" />
            <img src={siyanomo} alt="siyanomo-img" /> */}
      </div>
    </div>
  );
}

export default PartnersandMemberships;
