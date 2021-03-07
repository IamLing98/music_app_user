import React, { useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { Link } from "react-router-dom";

import SearchIcon from "../../../assets/images/svg/search.svg";
import LanguageIcon from "../../../assets/images/svg/lang.svg";

const Header = (props) => {
  const [isShowLanguagePopup, setIsShowLanguagePopup] = useState(true);
  return (
    <div className="ms_header">
      <div className="ms_top_left">
        <div className="ms_top_search">
          <input type="text" className="form-control" placeholder="Search Music Here.." />
          <span className="search_icon">
            <img src={SearchIcon} />
          </span>
        </div>
        <div className="ms_top_trend">
          <span>
            <Link to="/" className="ms_color">
              Trending Songs :
            </Link>
          </span>{" "}
          <span className="top_marquee">
            <Link to="/">
              Dream your moments, Until I Met You, Gimme Some Courage, Dark Alley (+8
              More)
            </Link>
          </span>
        </div>
      </div>
      <div className="ms_top_right">
        <div className="ms_top_lang">
          <Dropdown
            isOpen={isShowLanguagePopup}
            toggle={() => setIsShowLanguagePopup(false)}
          >
            <DropdownToggle caret> 
            <span onClick={() => setIsShowLanguagePopup(true)}>
              Languages <img src={LanguageIcon} />{" "}
              <DropdownMenu>
                <DropdownItem>English</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Tiếng Việt</DropdownItem>
              </DropdownMenu>
            </span>
            </DropdownToggle>
          </Dropdown>
        </div>
        <div className="ms_top_btn">
          <Link to="/" className="ms_btn reg_btn">
            <span>register</span>
          </Link>
          <Link to="/" className="ms_btn login_btn">
            <span>login</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
