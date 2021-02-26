import React from "react";
import { NavItem, NavLink } from "reactstrap";
import Translation from "../../utils/int8-util";

const BottomBarListItem = (props) => {
  return (
    <NavItem className="nav-item" key={"nav" + props.path}>
      <NavLink to={props.path} className="nav-link">
        <i className={props.icon} />
        <span className="menu-title">
          <Translation value={props.title} />
        </span>
        <i className="menu-arrow" />
      </NavLink>
      {props.children ? (
        <div className="submenu">
          <ul className="submenu-item">
            {props.children.map((child, index) => {
              return (
                <NavItem className="nav-item" key={"BtBar" + index}>
                  <NavLink className="nav-link" to={child.path}>
                    <Translation value={child.title} />
                  </NavLink>
                </NavItem>
              );
            })}
          </ul>
        </div>
      ) : (
        ""
      )}
    </NavItem>
  );
};

export default BottomBarListItem;
