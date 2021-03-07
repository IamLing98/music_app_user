import React from "react";
import Header from './Header';
import Banner from '../Banner';

const ContentWrapper = (props) => {
  return <div className="ms_content_wrapper padder_top80">
      <Header />
      <Banner/>
  </div>;
};
export default ContentWrapper;
