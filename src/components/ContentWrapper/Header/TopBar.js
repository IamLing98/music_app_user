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
        
    </>
  );
};

export default TopBar;
