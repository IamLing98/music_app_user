import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import PlayIcon from "../../assets/images/svg/play.svg";
import MoreIcon from "../../assets/images/svg/more.svg";
import MusicRIcon from "../../assets/images/music/r_music1.jpg";

const SlideContent = (props) => {
  return (
    <div
      className="swiper-slide"
      style={{ marginRight: 30 }} 
    >
      <div className="ms_rcnt_box">
        <div className="ms_rcnt_box_img">
          <img src={MusicRIcon} />
          <div className="ms_main_overlay">
            <div className="ms_box_overlay" />
            <div className="ms_more_icon">
              <img src={MoreIcon} alt />
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
            <Link to={props.trackUrl}>{props.trackName}</Link>
          </h3>
          <p>
            {props.authors.map((author, index) => {
              return <>{author} &amp;</>;
            })}
          </p>
        </div>
      </div>
    </div>
  );
};
export default SlideContent;
