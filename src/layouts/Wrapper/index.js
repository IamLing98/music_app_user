import React from "react";
import SideBar from "../../components/SideBar";
import ContentWrapper from "../../components/ContentWrapper";
import Footer from "../../components/Footer";
import Player from "../../components/Player"; 

const Wrapper = (props) => {
  return (
    <div className="ms_main_wrapper">
      <SideBar />
      <ContentWrapper />
      <Footer />
      <Player /> 
    </div>
  );
};
export default Wrapper;
