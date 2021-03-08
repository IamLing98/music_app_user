import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper"; 
import SwiperContainer from "./SwiperContainer";
  
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Slider = (props) => {
  const [slidesPerView, setSlidesPerView] = useState(6);
  return (
    <div className="ms_rcnt_slider">
      <div className="ms_heading">
        <h1>Recently Played</h1>
        <span className="veiw_all">
          <a 
            href="/"
          >
            view more
          </a>
        </span>
      </div>
      <SwiperContainer slidesPerView={slidesPerView} />
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
