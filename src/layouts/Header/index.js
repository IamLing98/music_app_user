import React from "react";
import BottomBar from "./BottomBar";
import TopBar from './TopBar';

const HorizontalMenu = (props) => {
  return (
    <div className="horizontal-menu">
      <TopBar/>
      <BottomBar />
    </div>
  );
};

export default HorizontalMenu;
