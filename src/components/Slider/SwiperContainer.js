import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import SlideContent from "./SlideContent";

import PlayIcon from "../../assets/images/svg/play.svg";
import MoreIcon from "../../assets/images/svg/more.svg";
import MusicRIcon from "../../assets/images/music/r_music1.jpg";
import MusicRIcon2 from "../../assets/images/music/r_music2.jpg";
import MusicRIcon3 from "../../assets/images/music/r_music3.jpg";
import SliderData from "../../mock/sliderData";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToScroll: 4,
};

const SwiperContainer = (props) => {
  useEffect(() => {}, [props.slidesPerView]);

  return (
    <Slider {...settings} slidesToShow={props.slidesPerView}>
      <SlideContent trackName="Dream Your Moments (Duet)" authors={["Đoàn Văn Linh"]} /> 
      <SlideContent trackName="Dream Your Moments (Duet)" authors={["Đoàn Văn Linh"]} /> 
      <SlideContent trackName="Dream Your Moments (Duet)" authors={["Đoàn Văn Linh"]} /> 
      <SlideContent trackName="Dream Your Moments (Duet)" authors={["Đoàn Văn Linh"]} /> 
      <SlideContent trackName="Dream Your Moments (Duet)" authors={["Đoàn Văn Linh"]} /> 
      <SlideContent trackName="Dream Your Moments (Duet)" authors={["Đoàn Văn Linh"]} />
    </Slider>
  );
};
export default SwiperContainer;
