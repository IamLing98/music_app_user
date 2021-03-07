import React from "react";
import BottomBarListItem from "../../components/BottomBar/BottomBarListItem";
import { Nav, NavItem, NavLink } from "reactstrap";
import navs from "./navs";

const BottomBar = (props) => {
  return (
    <nav className="bottom-navbar">
      <div className="container">
        <ul className="nav page-navigation">
          {navs
            ? navs.map((route, index) => {
                return <BottomBarListItem {...route} key={"navbar" + index} />;
              })
            : ""} 
        </ul>
      </div>
    </nav>
  );
};

export default BottomBar;
