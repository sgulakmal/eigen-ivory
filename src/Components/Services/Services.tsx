import './Services.module.scss'
import React, { useState } from 'react';
import servicesbgimg from '../../Assests/services-bg-img.svg'
import sliderImg from '../../Assests/slider_temp.png'

function Services() {

   return (
    <div className="main-services-content">
        <div className='services-title'>
            <h3>SERVICES</h3>
        </div>
        <div className="grid-section-1">
            <div className="item1-section">
                <p>Explore innovative solutions we offer</p>
            </div>
            {/* <div className="item2-section"> */}
            <img src={sliderImg} alt="team-img" />
            {/* </div> */}
        </div>
        <div className="grid-section-2">
            <div className="services-bgimg-cont">
                <img src={servicesbgimg} alt="services-bg-img" />
            </div>
            <div className="ivorySkills-cont">
                <h3>IvorySkills</h3>
                <p>With IvorySkills , we provide you with skillful developers, quality assurance engineers, 
                    project managers and DevOps engineers to whatever extent you need. You will have full 
                    control over how they integrate with your team. We take care of recruitment, HR, legal 
                    and salary matters. We also take care of their working environment, leaving you with little 
                    to no hassle at all. We provide scalable solutions that fit your ever-changing needs.</p>
            </div>
        </div>

    </div>
  );
}

export default Services;
