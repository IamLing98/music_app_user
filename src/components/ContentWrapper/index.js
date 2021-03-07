import React from "react";
import Header from './Header';
import Banner from '../Banner';
import Slider from '../Slider';

const ContentWrapper = (props) => {
  return <div className="ms_content_wrapper padder_top80">
      <Header />
      <Banner/>
      <Slider/>
  </div>;
};
export default ContentWrapper;
