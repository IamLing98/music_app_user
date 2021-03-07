import React, { useState, useEffect } from "react"; 
import SwiperSlide from "./SwiperSlide";

import PlayIcon from "../../assets/images/svg/play.svg";
import MoreIcon from "../../assets/images/svg/more.svg";
import MusicRIcon from "../../assets/images/music/r_music1.jpg";
import MusicRIcon2 from "../../assets/images/music/r_music2.jpg";
import MusicRIcon3 from "../../assets/images/music/r_music3.jpg";
import SliderData from "../../mock/sliderData";

const Slider = (props) => {
  return (
    <div className="ms_rcnt_slider">
      <div className="ms_heading">
        <h1>Recently Played</h1>
        <span className="veiw_all">
          <a href="#">view more</a>
        </span>
      </div>
      <div className="swiper-container swiper-container-horizontal">
        <div
          className="swiper-wrapper"
          style={{
            transform: "translate3d(-2021.25px, 0px, 0px)",
            transitionDuration: "0ms",
          }}
        >
          <div
            className="swiper-slide "
            style={{ width: "258.75px", marginRight: 30 }}
            data-swiper-slide-index={6}
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
                  <a href="#">Dream Your Moments (Duet)</a>
                </h3>
                <p>Ava Cornish &amp; Brian Hill</p>
              </div>
            </div>
          </div>
          <div
            className="swiper-slide swiper-slide-duplicate"
            style={{ width: "258.75px", marginRight: 30 }}
            data-swiper-slide-index={7}
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
                  <a href="#">Until I Met You</a>
                </h3>
                <p>Ava Cornish &amp; Brian Hill</p>
              </div>
            </div>
          </div>
          <div
            className="swiper-slide swiper-slide-duplicate"
            style={{ width: "258.75px", marginRight: 30 }}
            data-swiper-slide-index={8}
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
                  <a href="#">Gimme Some Courage</a>
                </h3>
                <p>Ava Cornish &amp; Brian Hill</p>
              </div>
            </div>
          </div>
          <div
            className="swiper-slide swiper-slide-duplicate"
            style={{ width: "258.75px", marginRight: 30 }}
            data-swiper-slide-index={9}
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
                  <a href="#">Dark Alley Acoustic</a>
                </h3>
                <p>Ava Cornish &amp; Brian Hill</p>
              </div>
            </div>
          </div>
          <div
            className="swiper-slide"
            style={{ width: "258.75px", marginRight: 30 }}
            data-swiper-slide-index={0}
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
                  <a href="#">Dream Your Moments (Duet)</a>
                </h3>
                <p>Ava Cornish &amp; Brian Hill</p>
              </div>
            </div>
          </div>
          <div
            className="swiper-slide"
            style={{ width: "258.75px", marginRight: 30 }}
            data-swiper-slide-index={1}
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
                  <a href="#">Until I Met You</a>
                </h3>
                <p>Ava Cornish &amp; Brian Hill</p>
              </div>
            </div>
          </div>
          <div
            className="swiper-slide swiper-slide-prev"
            style={{ width: "258.75px", marginRight: 30 }}
            data-swiper-slide-index={2}
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
                  <a href="#">Gimme Some Courage</a>
                </h3>
                <p>Ava Cornish &amp; Brian Hill</p>
              </div>
            </div>
          </div>
          <div
            className="swiper-slide swiper-slide-active"
            style={{ width: "258.75px", marginRight: 30 }}
            data-swiper-slide-index={3}
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
                  <a href="#">Dark Alley Acoustic</a>
                </h3>
                <p>Ava Cornish &amp; Brian Hill</p>
              </div>
            </div>
          </div>
          <div
            className="swiper-slide swiper-slide-next"
            style={{ width: "258.75px", marginRight: 30 }}
            data-swiper-slide-index={4}
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
                  <a href="#">Walking Promises</a>
                </h3>
                <p>Ava Cornish &amp; Brian Hill</p>
              </div>
            </div>
          </div>
          <div
            className="swiper-slide"
            style={{ width: "258.75px", marginRight: 30 }}
            data-swiper-slide-index={5}
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
                  <a href="#">Desired Games</a>
                </h3>
                <p>Ava Cornish &amp; Brian Hill</p>
              </div>
            </div>
          </div>
          <div
            className="swiper-slide"
            style={{ width: "258.75px", marginRight: 30 }}
            data-swiper-slide-index={6}
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
                  <a href="#">Dream Your Moments (Duet)</a>
                </h3>
                <p>Ava Cornish &amp; Brian Hill</p>
              </div>
            </div>
          </div>
          <div
            className="swiper-slide"
            style={{ width: "258.75px", marginRight: 30 }}
            data-swiper-slide-index={7}
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
                  <a href="#">Until I Met You</a>
                </h3>
                <p>Ava Cornish &amp; Brian Hill</p>
              </div>
            </div>
          </div>
          <div
            className="swiper-slide"
            style={{ width: "258.75px", marginRight: 30 }}
            data-swiper-slide-index={8}
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
                  <a href="#">Gimme Some Courage</a>
                </h3>
                <p>Ava Cornish &amp; Brian Hill</p>
              </div>
            </div>
          </div>
          <div
            className="swiper-slide"
            style={{ width: "258.75px", marginRight: 30 }}
            data-swiper-slide-index={9}
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
                  <a href="#">Dark Alley Acoustic</a>
                </h3>
                <p>Ava Cornish &amp; Brian Hill</p>
              </div>
            </div>
          </div>
          <div
            className="swiper-slide swiper-slide-duplicate"
            style={{ width: "258.75px", marginRight: 30 }}
            data-swiper-slide-index={0}
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
                  <a href="#">Dream Your Moments (Duet)</a>
                </h3>
                <p>Ava Cornish &amp; Brian Hill</p>
              </div>
            </div>
          </div>
          <div
            className="swiper-slide swiper-slide-duplicate"
            style={{ width: "258.75px", marginRight: 30 }}
            data-swiper-slide-index={1}
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
                  <a href="#">Until I Met You</a>
                </h3>
                <p>Ava Cornish &amp; Brian Hill</p>
              </div>
            </div>
          </div>
          <div
            className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
            style={{ width: "258.75px", marginRight: 30 }}
            data-swiper-slide-index={2}
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
                  <a href="#">Gimme Some Courage</a>
                </h3>
                <p>Ava Cornish &amp; Brian Hill</p>
              </div>
            </div>
          </div>
          <div
            className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
            style={{ width: "258.75px", marginRight: 30 }}
            data-swiper-slide-index={3}
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
                  <a href="#">Dark Alley Acoustic</a>
                </h3>
                <p>Ava Cornish &amp; Brian Hill</p>
              </div>
            </div>
          </div>
        </div>
        <span className="swiper-notification" aria-live="assertive" aria-atomic="true" />
        <span className="swiper-notification" aria-live="assertive" aria-atomic="true" />
      </div>

      {/* Add Arrows */}
      <div className="swiper-button-next slider_nav_next" />
      <div className="swiper-button-prev slider_nav_prev" />
    </div>
  );
};
export default Slider;
