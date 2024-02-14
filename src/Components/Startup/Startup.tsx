import React from 'react';
import teamImg from '../../Assests/team-img.svg'
import './startup.css'
import { Col, Row } from 'antd'

function Startup() {
  return (
    <Row>
      <Col span={12} className='start-up-text'>
        <div className="text-container-1">
          <h2>Offshore, Onshore and Nearshore Skill Outsourcing</h2>
        </div>
        <div className="text-container-2">
          <p>From skilled developers to large development teams, we are here to provide you with what your company needs to grow.</p>
        </div>
      </Col>
      <Col span={12} style={{textAlign: 'right'}}>
        <img src={teamImg} alt="team-img" />
      </Col>
    </Row>
  );
}

export default Startup;