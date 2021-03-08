import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import SlideContent from "./SlideContent";

import PlayIcon from "../../assets/images/svg/play.svg";
import MoreIcon from "../../assets/images/svg/more.svg";
import MusicRIcon from "../../assets/images/music/r_music1.jpg";
import MusicRIcon2 from "../../assets/images/music/r_music2.jpg";
import MusicRIcon3 from "../../assets/images/music/r_music3.jpg";
import SliderData from "../../mock/sliderData";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Slider = (props) => {
  return (
    <div className="ms_rcnt_slider">
      <div className="ms_heading">
        <h1>Recently Played</h1>
        <span className="veiw_all">
          <a href="#">view more</a>
        </span>
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        navigation
      >
        <SwiperSlide>
          <SlideContent
            trackName="Dream Your Moments (Duet)"
            authors={["Đoàn Văn Linh"]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent
            trackName="Dream Your Moments (Duet)"
            authors={["Đoàn Văn Linh"]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent
            trackName="Dream Your Moments (Duet)"
            authors={["Đoàn Văn Linh"]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent
            trackName="Dream Your Moments (Duet)"
            authors={["Đoàn Văn Linh"]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent
            trackName="Dream Your Moments (Duet)"
            authors={["Đoàn Văn Linh"]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent
            trackName="Dream Your Moments (Duet)"
            authors={["Đoàn Văn Linh"]}
          />
        </SwiperSlide>
      </Swiper>
    </div>
    //     <span className="swiper-notification" aria-live="assertive" aria-atomic="true" />
    //     <span className="swiper-notification" aria-live="assertive" aria-atomic="true" />
    //   </div>

    //   {/* Add Arrows */}
    //   <div className="swiper-button-next slider_nav_next" />
    //   <div className="swiper-button-prev slider_nav_prev" />
    // </div>
  );
};
export default Slider;
