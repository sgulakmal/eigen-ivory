import React from "react";
import "./partnersandmemberships.css";
// import partnersmembers from '../../Assests/partners-members.svg'
// import starmanconsotium from '../../Assests/starman-consortium.svg'
// import enricharcane from '../../Assests/enrich-arcane.svg'
// import lankalab from '../../Assests/lanka-lab.svg'
// import fetchseed from '../../Assests/fetch-seed.svg'
// import siyanomo from '../../Assests/siyanomo.svg'

function PartnersandMemberships() {
  return (
    <div className="main-p-m-content">
      <div className="p-m-title">
        <h3>PARTNERS & MEMBERSHIPS</h3>
      </div>
      <div className="p-m-grid-section-1">
        <div className="p-m-item1-section">
          <p>Our Valued Partner Customers: Fueling Collective Success</p>
        </div>
        <div className="p-m-item2-section">
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
      <div className="p-m-imagecontainer">
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
