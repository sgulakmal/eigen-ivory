import React, { useState } from 'react';
import './navbar.css'
import logo from '../../Assests/eigen-ivory-logo.svg';
import { Menu, Button } from 'antd';
import { SearchOutlined, CloseOutlined } from '@ant-design/icons';

function Navbar() {

  const [isSearchOverlayVisible, setSearchOverlayVisible] = useState(false);

  const handleSearchIconClick = () => {
    setSearchOverlayVisible(true);
  };

  const handleCloseIconClick = () => {
    setSearchOverlayVisible(false);
  };

  const scrollToSection = (sectionId: string) => {
    var section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className="Navbar">
      <div className="logo">
        <img src={logo} alt="EigenIvory Logo" />
      </div>

      <div className="nav-menu">
        <div>
          <Menu mode="horizontal" className="menu">
            <Menu.Item key="about" onClick={() => scrollToSection('about')}>About</Menu.Item>
            <Menu.Item key="services" onClick={() => scrollToSection('services')}>Services</Menu.Item>
            <Menu.Item key="partners" onClick={() => scrollToSection('partner')}>Partners</Menu.Item>
            <Menu.Item key="contacts" onClick={() => scrollToSection('contact')}>Contacts</Menu.Item>
          </Menu>
        </div>
        <div>
          <SearchOutlined className="search-icon" onClick={handleSearchIconClick} />
        </div>
        {isSearchOverlayVisible && (
          <div className="search-overlay">
            <input type="text" placeholder="Search" />
            <CloseOutlined onClick={handleCloseIconClick} className="close-icon" />
          </div>
        )}
        <div>
          <Button type="primary" className="lets-talk-btn">Let's Talk</Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;