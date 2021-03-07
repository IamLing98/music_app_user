import React from "react";
import VolumeIcon from "../../assets/images/svg/volume.svg";
import WeeklyArtist from '../../assets/images/weekly/song1.jpg'

const PlayerWrapper = (props) => {
  return (
    <div className="ms_player_wrapper">
      <div className="ms_player_close">
        <i className="fa fa-angle-up" aria-hidden="true" />
      </div>
      <div className="player_mid">
        <div className="audio-player">
          <div
            id="jquery_jplayer_1"
            className="jp-jplayer"
            style={{ width: 0, height: 0 }}
          >
            <img id="jp_poster_0" style={{ width: 0, height: 0, display: "none" }} />
            <audio
              id="jp_audio_0"
              preload="metadata"
              src="http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg"
              title="Cro Magnon Man"
            />
          </div>
          <div
            id="jp_container_1"
            className="jp-audio"
            role="application"
            aria-label="media player"
          >
            <div className="player_left">
              <div className="ms_play_song">
                <div className="play_song_name">
                  <a href="javascript:void(0);" id="playlist-text">
                    <div className="jp-now-playing flex-item">
                      <div className="jp-track-name">
                        <span className="que_img">
                          <img src={WeeklyArtist} />
                        </span>
                        <div className="que_data">
                          Cro Magnon Man{" "}
                          <div className="jp-artist-name">Mushroom Records</div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="play_song_options">
                <ul>
                  <li>
                    <a href="#">
                      <span className="song_optn_icon">
                        <i className="ms_icon icon_download" />
                      </span>
                      download now
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="song_optn_icon">
                        <i className="ms_icon icon_fav" />
                      </span>
                      Add To Favourites
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="song_optn_icon">
                        <i className="ms_icon icon_playlist" />
                      </span>
                      Add To Playlist
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="song_optn_icon">
                        <i className="ms_icon icon_share" />
                      </span>
                      Share
                    </a>
                  </li>
                </ul>
              </div>
              <span className="play-left-arrow">
                <i className="fa fa-angle-right" aria-hidden="true" />
              </span>
            </div>
            {/*--Right Queue--*/}
            <div className="jp_queue_wrapper">
              <span className="que_text" id="myPlaylistQueue">
                <i className="fa fa-angle-up" aria-hidden="true" /> queue
              </span>
              <div
                id="playlist-wrap"
                className="jp-playlist find_li"
                style={{ display: "none" }}
              >
                <div className="jp_queue_cls">
                  <i className="fa fa-times" aria-hidden="true" />
                </div>
                <h2>queue</h2>
                <div
                  className="jp_queue_list_inner mCustomScrollbar _mCS_2 mCS-autoHide mCS_no_scrollbar"
                  style={{ height: 345, position: "relative", overflow: "visible" }}
                >
                  <div
                    id="mCSB_2"
                    className="mCustomScrollBox mCS-minimal mCSB_vertical mCSB_outside"
                    tabIndex={0}
                    style={{ maxHeight: 345 }}
                  >
                    <div
                      id="mCSB_2_container"
                      className="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
                      style={{ position: "relative", top: 0, left: 0 }}
                      dir="ltr"
                    >
                      <ul style={{}}>
                        <li className="jp-playlist-current">
                          <div>
                            <a
                              href="javascript:;"
                              className="jp-playlist-item-remove"
                              style={{ display: "none" }}
                            >
                              ×
                            </a>
                            <a
                              href="javascript:;"
                              className="jp-playlist-item jp-playlist-current"
                              tabIndex={0}
                            >
                              <span className="que_img">
                                <img src="images/weekly/song1.jpg" />
                              </span>
                              <div className="que_data">
                                Cro Magnon Man{" "}
                                <span className="jp-artist">by Mushroom Records</span>
                              </div>
                            </a>
                            <div className="action">
                              <span className="que_more">
                                <img src="images/svg/more.svg" />
                              </span>
                              <span className="que_close">
                                <img src="images/svg/close.svg" />
                              </span>
                            </div>
                          </div>
                          <ul className="more_option">
                            <li className="jp-playlist-current">
                              <a href="#">
                                <span className="opt_icon" title="Add To Favourites">
                                  <span className="icon icon_fav" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="opt_icon" title="Add To Queue">
                                  <span className="icon icon_queue" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="opt_icon" title="Download Now">
                                  <span className="icon icon_dwn" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="opt_icon" title="Add To Playlist">
                                  <span className="icon icon_playlst" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="opt_icon" title="Share">
                                  <span className="icon icon_share" />
                                </span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <div>
                            <a
                              href="javascript:;"
                              className="jp-playlist-item-remove"
                              style={{ display: "none" }}
                            >
                              ×
                            </a>
                            <a
                              href="javascript:;"
                              className="jp-playlist-item"
                              tabIndex={0}
                            >
                              <span className="que_img">
                                <img src="images/weekly/song2.jpg" />
                              </span>
                              <div className="que_data">
                                Your Face <span className="jp-artist">by Ministry</span>
                              </div>
                            </a>
                            <div className="action">
                              <span className="que_more">
                                <img src="images/svg/more.svg" />
                              </span>
                              <span className="que_close">
                                <img src="images/svg/close.svg" />
                              </span>
                            </div>
                          </div>
                          <ul className="more_option">
                            <li className="jp-playlist-current">
                              <a href="#">
                                <span className="opt_icon" title="Add To Favourites">
                                  <span className="icon icon_fav" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="opt_icon" title="Add To Queue">
                                  <span className="icon icon_queue" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="opt_icon" title="Download Now">
                                  <span className="icon icon_dwn" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="opt_icon" title="Add To Playlist">
                                  <span className="icon icon_playlst" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="opt_icon" title="Share">
                                  <span className="icon icon_share" />
                                </span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <div>
                            <a
                              href="javascript:;"
                              className="jp-playlist-item-remove"
                              style={{ display: "none" }}
                            >
                              ×
                            </a>
                            <a
                              href="javascript:;"
                              className="jp-playlist-item"
                              tabIndex={0}
                            >
                              <span className="que_img">
                                <img src="images/weekly/song3.jpg" />
                              </span>
                              <div className="que_data">
                                Cyber Sonnet{" "}
                                <span className="jp-artist">by You Am I</span>
                              </div>
                            </a>
                            <div className="action">
                              <span className="que_more">
                                <img src="images/svg/more.svg" />
                              </span>
                              <span className="que_close">
                                <img src="images/svg/close.svg" />
                              </span>
                            </div>
                          </div>
                          <ul className="more_option">
                            <li className="jp-playlist-current">
                              <a href="#">
                                <span className="opt_icon" title="Add To Favourites">
                                  <span className="icon icon_fav" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="opt_icon" title="Add To Queue">
                                  <span className="icon icon_queue" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="opt_icon" title="Download Now">
                                  <span className="icon icon_dwn" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="opt_icon" title="Add To Playlist">
                                  <span className="icon icon_playlst" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="opt_icon" title="Share">
                                  <span className="icon icon_share" />
                                </span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <div>
                            <a
                              href="javascript:;"
                              className="jp-playlist-item-remove"
                              style={{ display: "none" }}
                            >
                              ×
                            </a>
                            <a
                              href="javascript:;"
                              className="jp-playlist-item"
                              tabIndex={0}
                            >
                              <span className="que_img">
                                <img src="images/weekly/song4.jpg" />
                              </span>
                              <div className="que_data">
                                Tempered Song{" "}
                                <span className="jp-artist">by Shelter</span>
                              </div>
                            </a>
                            <div className="action">
                              <span className="que_more">
                                <img src="images/svg/more.svg" />
                              </span>
                              <span className="que_close">
                                <img src="images/svg/close.svg" />
                              </span>
                            </div>
                          </div>
                          <ul className="more_option">
                            <li className="jp-playlist-current">
                              <a href="#">
                                <span className="opt_icon" title="Add To Favourites">
                                  <span className="icon icon_fav" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="opt_icon" title="Add To Queue">
                                  <span className="icon icon_queue" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="opt_icon" title="Download Now">
                                  <span className="icon icon_dwn" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="opt_icon" title="Add To Playlist">
                                  <span className="icon icon_playlst" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="opt_icon" title="Share">
                                  <span className="icon icon_share" />
                                </span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <div>
                            <a
                              href="javascript:;"
                              className="jp-playlist-item-remove"
                              style={{ display: "none" }}
                            >
                              ×
                            </a>
                            <a
                              href="javascript:;"
                              className="jp-playlist-item"
                              tabIndex={0}
                            >
                              <span className="que_img">
                                <img src="images/weekly/song5.jpg" />
                              </span>
                              <div className="que_data">
                                Hidden <span className="jp-artist">by Bad Religion</span>
                              </div>
                            </a>
                            <div className="action">
                              <span className="que_more">
                                <img src="images/svg/more.svg" />
                              </span>
                              <span className="que_close">
                                <img src="images/svg/close.svg" />
                              </span>
                            </div>
                          </div>
                          <ul className="more_option">
                            <li className="jp-playlist-current">
                              <a href="#">
                                <span className="opt_icon" title="Add To Favourites">
                                  <span className="icon icon_fav" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="opt_icon" title="Add To Queue">
                                  <span className="icon icon_queue" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="opt_icon" title="Download Now">
                                  <span className="icon icon_dwn" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="opt_icon" title="Add To Playlist">
                                  <span className="icon icon_playlst" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="opt_icon" title="Share">
                                  <span className="icon icon_share" />
                                </span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <div>
                            <a
                              href="javascript:;"
                              className="jp-playlist-item-remove"
                              style={{ display: "none" }}
                            >
                              ×
                            </a>
                            <a
                              href="javascript:;"
                              className="jp-playlist-item"
                              tabIndex={0}
                            >
                              <span className="que_img">
                                <img src="images/weekly/song6.jpg" />
                              </span>
                              <div className="que_data">
                                Lentement <span className="jp-artist">by Apollo 440</span>
                              </div>
                            </a>
                            <div className="action">
                              <span className="que_more">
                                <img src="images/svg/more.svg" />
                              </span>
                              <span className="que_close">
                                <img src="images/svg/close.svg" />
                              </span>
                            </div>
                          </div>
                          <ul className="more_option">
                            <li className="jp-playlist-current">
                              <a href="#">
                                <span className="opt_icon" title="Add To Favourites">
                                  <span className="icon icon_fav" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="opt_icon" title="Add To Queue">
                                  <span className="icon icon_queue" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="opt_icon" title="Download Now">
                                  <span className="icon icon_dwn" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="opt_icon" title="Add To Playlist">
                                  <span className="icon icon_playlst" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="opt_icon" title="Share">
                                  <span className="icon icon_share" />
                                </span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <div>
                            <a
                              href="javascript:;"
                              className="jp-playlist-item-remove"
                              style={{ display: "none" }}
                            >
                              ×
                            </a>
                            <a
                              href="javascript:;"
                              className="jp-playlist-item"
                              tabIndex={0}
                            >
                              <span className="que_img">
                                <img src="images/weekly/song7.jpg" />
                              </span>
                              <div className="que_data">
                                Lismore{" "}
                                <span className="jp-artist">by Bloodhound Gang</span>
                              </div>
                            </a>
                            <div className="action">
                              <span className="que_more">
                                <img src="images/svg/more.svg" />
                              </span>
                              <span className="que_close">
                                <img src="images/svg/close.svg" />
                              </span>
                            </div>
                          </div>
                          <ul className="more_option">
                            <li className="jp-playlist-current">
                              <a href="#">
                                <span className="opt_icon" title="Add To Favourites">
                                  <span className="icon icon_fav" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="opt_icon" title="Add To Queue">
                                  <span className="icon icon_queue" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="opt_icon" title="Download Now">
                                  <span className="icon icon_dwn" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="opt_icon" title="Add To Playlist">
                                  <span className="icon icon_playlst" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="opt_icon" title="Share">
                                  <span className="icon icon_share" />
                                </span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <div>
                            <a
                              href="javascript:;"
                              className="jp-playlist-item-remove"
                              style={{ display: "none" }}
                            >
                              ×
                            </a>
                            <a
                              href="javascript:;"
                              className="jp-playlist-item"
                              tabIndex={0}
                            >
                              <span className="que_img">
                                <img src="images/weekly/song8.jpg" />
                              </span>
                              <div className="que_data">
                                The Separation{" "}
                                <span className="jp-artist">by Friendly Fires </span>
                              </div>
                            </a>
                            <div className="action">
                              <span className="que_more">
                                <img src="images/svg/more.svg" />
                              </span>
                              <span className="que_close">
                                <img src="images/svg/close.svg" />
                              </span>
                            </div>
                          </div>
                          <ul className="more_option">
                            <li className="jp-playlist-current">
                              <a href="#">
                                <span className="opt_icon" title="Add To Favourites">
                                  <span className="icon icon_fav" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="opt_icon" title="Add To Queue">
                                  <span className="icon icon_queue" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="opt_icon" title="Download Now">
                                  <span className="icon icon_dwn" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="opt_icon" title="Add To Playlist">
                                  <span className="icon icon_playlst" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="opt_icon" title="Share">
                                  <span className="icon icon_share" />
                                </span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <div>
                            <a
                              href="javascript:;"
                              className="jp-playlist-item-remove"
                              style={{ display: "none" }}
                            >
                              ×
                            </a>
                            <a
                              href="javascript:;"
                              className="jp-playlist-item"
                              tabIndex={0}
                            >
                              <span className="que_img">
                                <img src="images/weekly/song9.jpg" />
                              </span>
                              <div className="que_data">
                                Beside Me{" "}
                                <span className="jp-artist">by Friendly Fires </span>
                              </div>
                            </a>
                            <div className="action">
                              <span className="que_more">
                                <img src="images/svg/more.svg" />
                              </span>
                              <span className="que_close">
                                <img src="images/svg/close.svg" />
                              </span>
                            </div>
                          </div>
                          <ul className="more_option">
                            <li className="jp-playlist-current">
                              <a href="#">
                                <span className="opt_icon" title="Add To Favourites">
                                  <span className="icon icon_fav" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="opt_icon" title="Add To Queue">
                                  <span className="icon icon_queue" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="opt_icon" title="Download Now">
                                  <span className="icon icon_dwn" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="opt_icon" title="Add To Playlist">
                                  <span className="icon icon_playlst" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="opt_icon" title="Share">
                                  <span className="icon icon_share" />
                                </span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <div>
                            <a
                              href="javascript:;"
                              className="jp-playlist-item-remove"
                              style={{ display: "none" }}
                            >
                              ×
                            </a>
                            <a
                              href="javascript:;"
                              className="jp-playlist-item"
                              tabIndex={0}
                            >
                              <span className="que_img">
                                <img src="images/weekly/song2.jpg" />
                              </span>
                              <div className="que_data">
                                Bubble <span className="jp-artist">by Skunkhour</span>
                              </div>
                            </a>
                            <div className="action">
                              <span className="que_more">
                                <img src="images/svg/more.svg" />
                              </span>
                              <span className="que_close">
                                <img src="images/svg/close.svg" />
                              </span>
                            </div>
                          </div>
                          <ul className="more_option">
                            <li className="jp-playlist-current">
                              <a href="#">
                                <span className="opt_icon" title="Add To Favourites">
                                  <span className="icon icon_fav" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="opt_icon" title="Add To Queue">
                                  <span className="icon icon_queue" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="opt_icon" title="Download Now">
                                  <span className="icon icon_dwn" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="opt_icon" title="Add To Playlist">
                                  <span className="icon icon_playlst" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="opt_icon" title="Share">
                                  <span className="icon icon_share" />
                                </span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <div>
                            <a
                              href="javascript:;"
                              className="jp-playlist-item-remove"
                              style={{ display: "none" }}
                            >
                              ×
                            </a>
                            <a
                              href="javascript:;"
                              className="jp-playlist-item"
                              tabIndex={0}
                            >
                              <span className="que_img">
                                <img src="images/weekly/song2.jpg" />
                              </span>
                              <div className="que_data">
                                Stirring of a fool{" "}
                                <span className="jp-artist">by The Meanies</span>
                              </div>
                            </a>
                            <div className="action">
                              <span className="que_more">
                                <img src="images/svg/more.svg" />
                              </span>
                              <span className="que_close">
                                <img src="images/svg/close.svg" />
                              </span>
                            </div>
                          </div>
                          <ul className="more_option">
                            <li className="jp-playlist-current">
                              <a href="#">
                                <span className="opt_icon" title="Add To Favourites">
                                  <span className="icon icon_fav" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="opt_icon" title="Add To Queue">
                                  <span className="icon icon_queue" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="opt_icon" title="Download Now">
                                  <span className="icon icon_dwn" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="opt_icon" title="Add To Playlist">
                                  <span className="icon icon_playlst" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="opt_icon" title="Share">
                                  <span className="icon icon_share" />
                                </span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <div>
                            <a
                              href="javascript:;"
                              className="jp-playlist-item-remove"
                              style={{ display: "none" }}
                            >
                              ×
                            </a>
                            <a
                              href="javascript:;"
                              className="jp-playlist-item"
                              tabIndex={0}
                            >
                              <span className="que_img">
                                <img src="images/weekly/song2.jpg" />
                              </span>
                              <div className="que_data">
                                Partir{" "}
                                <span className="jp-artist">by The Living End</span>
                              </div>
                            </a>
                            <div className="action">
                              <span className="que_more">
                                <img src="images/svg/more.svg" />
                              </span>
                              <span className="que_close">
                                <img src="images/svg/close.svg" />
                              </span>
                            </div>
                          </div>
                          <ul className="more_option">
                            <li className="jp-playlist-current">
                              <a href="#">
                                <span className="opt_icon" title="Add To Favourites">
                                  <span className="icon icon_fav" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="opt_icon" title="Add To Queue">
                                  <span className="icon icon_queue" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="opt_icon" title="Download Now">
                                  <span className="icon icon_dwn" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="opt_icon" title="Add To Playlist">
                                  <span className="icon icon_playlst" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="opt_icon" title="Share">
                                  <span className="icon icon_share" />
                                </span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <div>
                            <a
                              href="javascript:;"
                              className="jp-playlist-item-remove"
                              style={{ display: "none" }}
                            >
                              ×
                            </a>
                            <a
                              href="javascript:;"
                              className="jp-playlist-item"
                              tabIndex={0}
                            >
                              <span className="que_img">
                                <img src="images/weekly/song2.jpg" />
                              </span>
                              <div className="que_data">
                                Thin Ice{" "}
                                <span className="jp-artist">by Screaming Trees</span>
                              </div>
                            </a>
                            <div className="action">
                              <span className="que_more">
                                <img src="images/svg/more.svg" />
                              </span>
                              <span className="que_close">
                                <img src="images/svg/close.svg" />
                              </span>
                            </div>
                          </div>
                          <ul className="more_option">
                            <li className="jp-playlist-current">
                              <a href="#">
                                <span className="opt_icon" title="Add To Favourites">
                                  <span className="icon icon_fav" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="opt_icon" title="Add To Queue">
                                  <span className="icon icon_queue" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="opt_icon" title="Download Now">
                                  <span className="icon icon_dwn" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="opt_icon" title="Add To Playlist">
                                  <span className="icon icon_playlst" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="opt_icon" title="Share">
                                  <span className="icon icon_share" />
                                </span>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    id="mCSB_2_scrollbar_vertical"
                    className="mCSB_scrollTools mCSB_2_scrollbar mCS-minimal mCSB_scrollTools_vertical"
                    style={{ display: "none" }}
                  >
                    <div className="mCSB_draggerContainer">
                      <div
                        id="mCSB_2_dragger_vertical"
                        className="mCSB_dragger"
                        style={{ position: "absolute", minHeight: 50, top: 0 }}
                      >
                        <div className="mCSB_dragger_bar" style={{ lineHeight: 50 }} />
                      </div>
                      <div className="mCSB_draggerRail" />
                    </div>
                  </div>
                </div>
                <div className="jp_queue_btn">
                  <a
                    href="javascript:;"
                    className="ms_clear"
                    data-toggle="modal"
                    data-target="#clear_modal"
                  >
                    clear
                  </a>
                  <a
                    href="clear_modal.html"
                    className="ms_save"
                    data-toggle="modal"
                    data-target="#save_modal"
                  >
                    save
                  </a>
                </div>
              </div>
            </div>
            <div className="jp-type-playlist">
              <div className="jp-gui jp-interface flex-wrap">
                <div className="jp-controls flex-item">
                  <button className="jp-previous" tabIndex={0}>
                    <i className="ms_play_control" />
                  </button>
                  <button className="jp-play" tabIndex={0}>
                    <i className="ms_play_control" />
                  </button>
                  <button className="jp-next" tabIndex={0}>
                    <i className="ms_play_control" />
                  </button>
                </div>
                <div className="jp-progress-container flex-item">
                  <div className="jp-time-holder">
                    <span className="jp-current-time" role="timer" aria-label="time">
                      00:00
                    </span>
                    <span className="jp-duration" role="timer" aria-label="duration">
                      04:27
                    </span>
                  </div>
                  <div className="jp-progress">
                    <div className="jp-seek-bar" style={{ width: "100%" }}>
                      <div className="jp-play-bar" style={{ width: "0%" }}>
                        <div className="bullet"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="jp-volume-controls flex-item">
                  <div className="widget knob-container">
                    <div className="knob-wrapper-outer">
                      <div className="knob-wrapper">
                        <div className="knob-mask">
                          <div
                            className="knob d3"
                            style={{ transform: "rotateZ(270deg)" }}
                          >
                            <span />
                          </div>
                          <div
                            className="handle"
                            style={{ transform: "rotateZ(270deg)" }}
                          />
                          <div className="round">
                            <img src={VolumeIcon} alt />
                          </div>
                        </div>
                      </div>
                      {/* <input></input> */}
                    </div>
                  </div>
                </div>
                <div className="jp-toggles flex-item">
                  <button className="jp-shuffle" tabIndex={0} title="Shuffle">
                    <i className="ms_play_control" />
                  </button>
                  <button className="jp-repeat" tabIndex={0} title="Repeat">
                    <i className="ms_play_control" />
                  </button>
                </div>
                <div className="jp_quality_optn custom_select">
                  <select style={{ display: "none" }}>
                    <option>quality</option>
                    <option value={1}>HD</option>
                    <option value={2}>High</option>
                    <option value={3}>medium</option>
                    <option value={4}>low</option>
                  </select>
                  <div className="nice-select" tabIndex={0}>
                    <span className="current">quality</span>
                    <ul className="list">
                      <li data-value="quality" className="option selected">
                        quality
                      </li>
                      <li data-value={1} className="option">
                        HD
                      </li>
                      <li data-value={2} className="option">
                        High
                      </li>
                      <li data-value={3} className="option">
                        medium
                      </li>
                      <li data-value={4} className="option">
                        low
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*main div*/}
    </div>
  );
};
export default PlayerWrapper;
