import React, { useState } from "react";
import style from "./Navbar.module.scss";
import logo from "../../Assests/eigen-ivory-logo.svg";
import { Menu, Button, Space, Drawer } from "antd";
import { SearchOutlined, CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";

function Navbar() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [isSearchOverlayVisible, setSearchOverlayVisible] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

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
    if (isMobile) {
      setOpenMobileMenu(false);
    }
  };

  const onOpenMobileMenuHandler = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  const menu = () => {
    return (
      <Menu mode={isMobile ? "inline" : "horizontal"} className={style.menu}>
        <Menu.Item key="about" onClick={() => scrollToSection("about")}>
          About
        </Menu.Item>
        <Menu.Item key="services" onClick={() => scrollToSection("services")}>
          Services
        </Menu.Item>
        <Menu.Item key="partners" onClick={() => scrollToSection("partner")}>
          Partners
        </Menu.Item>
        <Menu.Item key="contacts" onClick={() => scrollToSection("contact")}>
          Contacts
        </Menu.Item>
      </Menu>
    );
  };

  const logoElement = () => {
    return (
      <div className={isMobile ? style.mobile_logo : style.logo}>
        <img src={logo} alt="EigenIvory Logo" />
      </div>
    );
  };

  return (
    <div className={style.navbar}>
      {logoElement()}
      <div className={style.nav_menu}>
        {isMobile ? (
          <Drawer
            title={logoElement()}
            placement="left"
            closable={true}
            onClose={onOpenMobileMenuHandler}
            open={openMobileMenu}
          >
            {menu()}
          </Drawer>
        ) : (
          menu()
        )}
        {!isSearchOverlayVisible ? (
          <div>
            <SearchOutlined
              className={style.search_icon}
              onClick={handleSearchIconClick}
            />
          </div>
        ) : (
          <div className={style.search_overlay}>
            <input type="text" placeholder="Search" />
            <CloseOutlined
              onClick={handleCloseIconClick}
              className={style.close_icon}
            />
          </div>
        )}
        {isMobile ? (
          <div>
            {!isSearchOverlayVisible && (
              <Space>
                <Button type="primary" className={style.lets_talk_btn}>
                  Let's Talk
                </Button>

                <Button
                  type="dashed"
                  icon={<MenuOutlined />}
                  onClick={onOpenMobileMenuHandler}
                />
              </Space>
            )}
          </div>
        ) : (
          <div>
            <Space>
              <Button type="primary" className={style.lets_talk_btn}>
                Let's Talk
              </Button>
            </Space>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
