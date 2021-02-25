import React from "react";
import ContentWrapper from "../Wrapper/index";
import Footer from "../Footer/index";

const DefaultLayout = (props) => {
  return (
    <div className="container page-body-wrapper">
      <div class="main-panel">
        <ContentWrapper />
        <Footer />
      </div>
    </div>
  );
};

export default DefaultLayout;
