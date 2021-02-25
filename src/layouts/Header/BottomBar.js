import React from "react";
import BottomBarListItem from "../../components/BottomBar/BottomBarListItem";

const BottomBar = (props) => {
  return (
    <nav className="bottom-navbar">
      <div className="container">
        <ul className="nav page-navigation">
          {props.routes
            ? props.routes.map((route, index) => {
                return <BottomBarListItem {...route} />;
              })
            : ""}
          <li className="nav-item">
            <a className="nav-link" href="index.html">
              <i className="mdi mdi-file-document-box menu-icon" />
              <span className="menu-title">Dashboard</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="mdi mdi-cube-outline menu-icon" />
              <span className="menu-title">UI Elements</span>
              <i className="menu-arrow" />
            </a>
            <div className="submenu">
              <ul>
                <li className="nav-item">
                  <a className="nav-link" href="pages/ui-features/buttons.html">
                    Buttons
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/ui-features/typography.html">
                    Typography
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a href="pages/forms/basic_elements.html" className="nav-link">
              <i className="mdi mdi-chart-areaspline menu-icon" />
              <span className="menu-title">Form Elements</span>
              <i className="menu-arrow" />
            </a>
          </li>
          <li className="nav-item">
            <a href="pages/charts/chartjs.html" className="nav-link">
              <i className="mdi mdi-finance menu-icon" />
              <span className="menu-title">Charts</span>
              <i className="menu-arrow" />
            </a>
          </li>
          <li className="nav-item">
            <a href="pages/tables/basic-table.html" className="nav-link">
              <i className="mdi mdi-grid menu-icon" />
              <span className="menu-title">Tables</span>
              <i className="menu-arrow" />
            </a>
          </li>
          <li className="nav-item">
            <a href="pages/icons/mdi.html" className="nav-link">
              <i className="mdi mdi-emoticon menu-icon" />
              <span className="menu-title">Icons</span>
              <i className="menu-arrow" />
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="mdi mdi-codepen menu-icon" />
              <span className="menu-title">Sample Pages</span>
              <i className="menu-arrow" />
            </a>
            <div className="submenu">
              <ul className="submenu-item">
                <li className="nav-item">
                  <a className="nav-link" href="pages/samples/login.html">
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/samples/login-2.html">
                    Login 2
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/samples/register.html">
                    Register
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/samples/register-2.html">
                    Register 2
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/samples/lock-screen.html">
                    Lockscreen
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a href="docs/documentation.html" className="nav-link">
              <i className="mdi mdi-file-document-box-outline menu-icon" />
              <span className="menu-title">Documentation</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default BottomBar;
