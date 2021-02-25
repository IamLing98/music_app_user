import React from "react";
import { NavLink } from "react-router-dom";

const BottomBarListItem = (props) => {
  return (
    <li className="nav-item">
      <NavLink to={props.path} className="nav-link">
        <i className={props.icon} />
        <span className="menu-title">{props.title}</span>
        <i className="menu-arrow" />
      </NavLink>
      {props.children ? (
        <div className="submenu">
          <ul className="submenu-item">
            {props.children.map((child, index) => {
              return (
                <li className="nav-item" key={"BtBar" + index}>
                  <NavLink className="nav-link" to={child.path}>
                    {child.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        ""
      )}
    </li>
  );
};

export default BottomBarListItem;
