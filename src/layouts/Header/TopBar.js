import React, { useState } from "react";
import Badge from "@material-ui/core/Badge";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import { Dropdown, DropdownMenu, DropdownItem } from "reactstrap";
import { Nav, NavItem, NavLink } from "reactstrap";
import { Menu, Dropdown as AntdDropdown, Button, Space } from "antd";
import i18next from "i18next";
import Translation from "../../utils/int8-util";
import logo from "../../assets/images/logo.svg";
import face24 from "../../assets/images/faces/face24.jpg";

const TopBar = (props) => {
  const [notificationDropDownState, setNotificationDropDownState] = useState(false);

  const [emailDropDownState, setEmailDropDownState] = useState(false);

  const [profileDropdownState, setProfileDropDownState] = useState(false);

  const [currentLanguage, setCurrentLanguage] = useState({
    languageShortName: "en",
    languageFullName: "English",
  });

  const menu = (
    <Menu>
      <Menu.Item>
        <a
          onClick={() => {
            i18next.changeLanguage("en");
            setCurrentLanguage({ languageShortName: "en", languageFullName: "English" });
          }}
        >
          English
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          onClick={() => {
            i18next.changeLanguage("vi");
            setCurrentLanguage({ languageShortName: "vi", languageFullName: "Tiếng Việt" });
          }}
        >
          Tiếng Việt
        </a>
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <nav className="navbar top-navbar col-lg-12 col-12 p-0">
        <div className="container">
          <div className="navbar-menu-wrapper d-flex align-items-center justify-content-between">
            <Nav className="navbar-nav navbar-nav-left">
              <NavItem className="nav-item dropdown">
                <NavLink
                  className="nav-link count-indicator dropdown-toggle d-flex align-items-center justify-content-center"
                  id="notificationDropdown"
                  href="#"
                  data-toggle="dropdown"
                  onClick={() => setNotificationDropDownState(true)}
                >
                  <Badge color="secondary" badgeContent={1}>
                    <NotificationsOutlinedIcon />
                  </Badge>
                </NavLink>
                <Dropdown isOpen={notificationDropDownState} toggle={() => setNotificationDropDownState(false)}>
                  <DropdownMenu>
                    <DropdownItem className="mb-0 font-weight-normal float-left" header>
                      Header
                    </DropdownItem>
                    <DropdownItem>Some Action</DropdownItem>
                    <DropdownItem text>Dropdown Item Text</DropdownItem>
                    <DropdownItem disabled>Action (disabled)</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Foo Action</DropdownItem>
                    <DropdownItem>Bar Action</DropdownItem>
                    <DropdownItem>Quo Action</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
              <NavItem className="nav-item dropdown">
                <NavLink
                  className="nav-link count-indicator dropdown-toggle d-flex align-items-center justify-content-center"
                  id="notificationDropdown"
                  href="#"
                  data-toggle="dropdown"
                  onClick={() => setEmailDropDownState(true)}
                >
                  <Badge color="secondary" badgeContent={1}>
                    <EmailOutlinedIcon />
                  </Badge>
                </NavLink>
                <Dropdown isOpen={emailDropDownState} toggle={() => setEmailDropDownState(false)}>
                  <DropdownMenu>
                    <DropdownItem className="mb-0 font-weight-normal float-left" header={true}>
                      Header
                    </DropdownItem>
                    <DropdownItem>Some Action</DropdownItem>
                    <DropdownItem text>Dropdown Item Text</DropdownItem>
                    <DropdownItem disabled>Action (disabled)</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Foo Action</DropdownItem>
                    <DropdownItem>Bar Action</DropdownItem>
                    <DropdownItem>Quo Action</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
              <NavItem className="nav-item nav-search d-none d-lg-block ml-3">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="search">
                      <i className="mdi mdi-magnify" />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={"search"}
                    aria-label="search"
                    aria-describedby="search"
                  />
                </div>
              </NavItem>
            </Nav>
            <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
              <a className="navbar-brand brand-logo" href="index.html">
                <img src={logo} alt="logo" />
              </a>
              <a className="navbar-brand brand-logo-mini" href="index.html">
                <img src="images/logo-mini.svg" alt="logo" />
              </a>
            </div>
            <ul className="navbar-nav navbar-nav-right">
              <NavItem className="nav-item dropdown  ">
                <AntdDropdown overlay={menu} placement="bottomLeft">
                  <button style={{width:"92px"}} className="btn btn-inverse-primary btn-sm">{currentLanguage.languageFullName}</button>
                </AntdDropdown>
              </NavItem>
              <NavItem className="nav-item nav-profile dropdown">
                <a className="nav-link  " href="#" onClick={() => setProfileDropDownState(true)}>
                  <span className="nav-profile-name">Johnson</span>
                  <img src={face24} alt="profile" />
                </a>
                <Dropdown isOpen={profileDropdownState} toggle={() => setProfileDropDownState(false)}>
                  <DropdownMenu>
                    <DropdownItem text>
                      <SettingsOutlinedIcon />
                      Settings
                    </DropdownItem>
                    <DropdownItem>
                      <ExitToAppOutlinedIcon /> Logout
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default TopBar;
