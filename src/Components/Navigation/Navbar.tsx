import React, { useState } from "react";
import style from "./Navbar.module.scss";
import logo from "../../Assests/eigen-ivory-logo.svg";
import { Menu, Button } from "antd";
import { SearchOutlined, CloseOutlined } from "@ant-design/icons";

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
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={style.navbar}>
      <div className={style.logo}>
        <img src={logo} alt="EigenIvory Logo" />
      </div>

      <div className={style.nav_menu}>
        <div>
          <Menu mode="horizontal" className={style.menu}>
            <Menu.Item key="about" onClick={() => scrollToSection("about")}>
              About
            </Menu.Item>
            <Menu.Item
              key="services"
              onClick={() => scrollToSection("services")}
            >
              Services
            </Menu.Item>
            <Menu.Item
              key="partners"
              onClick={() => scrollToSection("partner")}
            >
              Partners
            </Menu.Item>
            <Menu.Item
              key="contacts"
              onClick={() => scrollToSection("contact")}
            >
              Contacts
            </Menu.Item>
          </Menu>
        </div>
        <div>
          <SearchOutlined
            className={style.search_icon}
            onClick={handleSearchIconClick}
          />
        </div>
        {isSearchOverlayVisible && (
          <div className={style.search_overlay}>
            <input type="text" placeholder="Search" />
            <CloseOutlined
              onClick={handleCloseIconClick}
              className={style.close_icon}
            />
          </div>
        )}
        <div>
          <Button type="primary" className={style.lets_talk_btn}>
            Let's Talk
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
