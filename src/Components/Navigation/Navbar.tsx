import React, { useState } from "react";
import style from "./Navbar.module.scss";
import logo from "../../Assests/eigen-ivory-logo.svg";
import { Menu, Button, Space, Drawer, MenuProps } from "antd";

import { useMediaQuery } from "react-responsive";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";

function Navbar() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  // const [isSearchOverlayVisible, setSearchOverlayVisible] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  type MenuItem = Required<MenuProps>["items"][number];

  const items: MenuItem[] = [
    {
      label: <b>Service</b>,
      key: "service",
      expandIcon: <DownOutlined />,
      children: [
        {
          label: "QA Outsourcing",
          key: "service1",
        },
        {
          label: "Digital Product Design",
          key: "service2",
        },
        {
          label: "Development Outsourcing",
          key: "service2",
        },
      ],
    },
    {
      label: <b>Industries</b>,
      key: "industries",
    },
    {
      label: <b>Case Studies</b>,
      key: "caseStudies",
    },
    {
      label: <b>Company</b>,
      key: "company",
      expandIcon: <DownOutlined />,
      children: [
        {
          label: "About",
          key: "about",
        },
        {
          label: "Vision & Mission",
          key: "visionMission",
        },
        {
          label: "Business Models",
          key: "businessModels",
        },
        {
          label: "Process/How We Work",
          key: "process",
        },
        {
          label: "Partnerships",
          key: "partnerships",
        },
        {
          label: "Certifications",
          key: "certifications",
        },
      ],
    },
    {
      label: <b>Careers</b>,
      key: "careers",
    },
    {
      label: <b>Contact</b>,
      key: "contact",
    },
  ];

  // const handleSearchIconClick = () => {
  //   setSearchOverlayVisible(true);
  // };

  // const handleCloseIconClick = () => {
  //   setSearchOverlayVisible(false);
  // };

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
      <Menu mode={isMobile ? "inline" : "horizontal"} items={items} />
      // <Menu mode={isMobile ? "inline" : "horizontal"}>
      //   <Menu.SubMenu key="services" title="Services">
      //     <Menu.Item key="service1" onClick={() => scrollToSection("service1")}>
      //       QA Outsourcing
      //     </Menu.Item>
      //     <Menu.Item key="service2" onClick={() => scrollToSection("service2")}>
      //       Digital Product Design
      //     </Menu.Item>
      //     <Menu.Item key="service3" onClick={() => scrollToSection("service2")}>
      //       Development Outsourcing
      //     </Menu.Item>
      //   </Menu.SubMenu>
      //   {/* <Menu.Item key="services" onClick={() => scrollToSection("services")}>
      //     Services
      //   </Menu.Item> */}
      //   <Menu.Item key="partners" onClick={() => scrollToSection("partner")}>
      //     Partners
      //   </Menu.Item>
      //   <Menu.Item key="contacts" onClick={() => scrollToSection("contact")}>
      //     Contacts
      //   </Menu.Item>
      // </Menu>
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
        {/* {!isSearchOverlayVisible ? (
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
        )} */}
        {isMobile ? (
          <div>
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
          </div>
        ) : (
          <div>
            <Space>
              <Button type="primary" className={style.lets_talk_btn}>
                Book a call
              </Button>
            </Space>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
