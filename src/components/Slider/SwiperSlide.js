import React, { useState, useEffect } from "react";
import PlayIcon from '../assets/images/svg/play.svg'

const SwiperSlide = (props) => {
  return (
    <div className="swiper-slide">
      <div className="ms_rcnt_box">
        <div className="ms_rcnt_box_img">
          <img src={props.imgUrl} alt />
          <div className="ms_main_overlay">
            <div className="ms_box_overlay" />
            <div className="ms_more_icon">
              <img src="images/svg/more.svg" alt />
            </div>
            <ul className="more_option">
              <li>
                <a href="#">
                  <span className="opt_icon">
                    <span className="icon icon_fav" />
                  </span>
                  Add To Favourites
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="opt_icon">
                    <span className="icon icon_queue" />
                  </span>
                  Add To Queue
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="opt_icon">
                    <span className="icon icon_dwn" />
                  </span>
                  Download Now
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="opt_icon">
                    <span className="icon icon_playlst" />
                  </span>
                  Add To Playlist
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="opt_icon">
                    <span className="icon icon_share" />
                  </span>
                  Share
                </a>
              </li>
            </ul>
            <div className="ms_play_icon">
              <img src={PlayIcon} alt />
            </div>
          </div>
        </div>
        <div className="ms_rcnt_box_text">
          <h3>
            <a href="#">Dream Your Moments (Duet)</a>
          </h3>
          <p>Ava Cornish &amp; Brian Hill</p>
        </div>
      </div>
    </div>
  );
};
export default SwiperSlide;
