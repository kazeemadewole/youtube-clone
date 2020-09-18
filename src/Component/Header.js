import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light  header__nav  ">
      <a className="navbar-brand " href="#">
        <img src="/img/youtube.png" alt="youtube" className="header__image" />
      </a>

      <div className="header__input m-auto d-none d-md-flex ">
        <input
          type="text"
          placeholder="search"
          className="form-control"
          name="search"
        />
        <SearchIcon fontSize="large" className="header__search" />
      </div>

      <div className="header__navright">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <MoreVertIcon className="header__icon" />
        <Avatar alt="Adewole Adebayo" src="img/bayo.jpg" />
      </div>
    </nav>
  );
};

export default Header;
