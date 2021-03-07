import React, { useState, useEffect } from "react";
import LogoIcon from '../../assets/images/logo.png';
import OpenLogo from '../../assets/images/open_logo.png';

const SideBar = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={`ms_sidemenu_wrapper ${isMenuOpen ? "open_menu" : ""}`}>
      <div className="ms_nav_close" onClick={() => setIsMenuOpen((value) => (value = !value))}>
        <i className="fa fa-angle-right" aria-hidden="true" />
      </div>
      <div className="ms_sidemenu_inner">
        <div className="ms_logo_inner">
          <div className="ms_logo">
            <a href="index-2.html">
              <img src={LogoIcon} alt className="img-fluid" />
            </a>
          </div>
          <div className="ms_logo_open">
            <a href="index-2.html">
              <img src={OpenLogo} alt className="img-fluid" />
            </a>
          </div>
        </div>
        <div className="ms_nav_wrapper">
          <ul>
            <li>
              <a href="index-2.html" className="active" title="Discover">
                <span className="nav_icon">
                  <span className="icon icon_discover" />
                </span>
                <span className="nav_text">discover</span>
              </a>
            </li>
            <li>
              <a href="album.html" title="Albums">
                <span className="nav_icon">
                  <span className="icon icon_albums" />
                </span>
                <span className="nav_text">albums</span>
              </a>
            </li>
            <li>
              <a href="artist.html" title="Artists">
                <span className="nav_icon">
                  <span className="icon icon_artists" />
                </span>
                <span className="nav_text">artists</span>
              </a>
            </li>
            <li>
              <a href="genres.html" title="Genres">
                <span className="nav_icon">
                  <span className="icon icon_genres" />
                </span>
                <span className="nav_text">genres</span>
              </a>
            </li>
            <li>
              <a href="top_track.html" title="Top Tracks">
                <span className="nav_icon">
                  <span className="icon icon_tracks" />
                </span>
                <span className="nav_text">top tracks</span>
              </a>
            </li>
            <li>
              <a href="free_music.html" title="Free Music">
                <span className="nav_icon">
                  <span className="icon icon_music" />
                </span>
                <span className="nav_text">free music</span>
              </a>
            </li>
            <li>
              <a href="stations.html" title="Stations">
                <span className="nav_icon">
                  <span className="icon icon_station" />
                </span>
                <span className="nav_text">stations</span>
              </a>
            </li>
          </ul>
          <ul className="nav_downloads">
            <li>
              <a href="download.html" title="Downloads">
                <span className="nav_icon">
                  <span className="icon icon_download" />
                </span>
                <span className="nav_text">downloads</span>
              </a>
            </li>
            <li>
              <a href="purchase.html" title="Purchased">
                <span className="nav_icon">
                  <span className="icon icon_purchased" />
                </span>
                <span className="nav_text">purchased</span>
              </a>
            </li>
            <li>
              <a href="favourite.html" title="Favourites">
                <span className="nav_icon">
                  <span className="icon icon_favourite" />
                </span>
                <span className="nav_text">favourites</span>
              </a>
            </li>
            <li>
              <a href="history.html" title="History">
                <span className="nav_icon">
                  <span className="icon icon_history" />
                </span>
                <span className="nav_text">history</span>
              </a>
            </li>
          </ul>
          <ul className="nav_playlist">
            <li>
              <a href="feature_playlist.html" title="Featured Playlist">
                <span className="nav_icon">
                  <span className="icon icon_fe_playlist" />
                </span>
                <span className="nav_text">featured playlist</span>
              </a>
            </li>
            <li>
              <a href="add_playlist.html" title="Create Playlist">
                <span className="nav_icon">
                  <span className="icon icon_c_playlist" />
                </span>
                <span className="nav_text">create playlist</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
