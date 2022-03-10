import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";

import "./navbar.scss";

function Navbar() {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsShowMenu(false);
  }, [pathname]);

  return (
    <div className="navbar">
      <div className="navbar-top">
        <div className="navbar-hamburger">
          <button onClick={() => setIsShowMenu(!isShowMenu)}>
            <MenuIcon className="navbar-icon" />
          </button>
        </div>
        <div className="logo">
          <Link to="/">
            <img src="./assets/logo.png" alt="logo" />
          </Link>
        </div>

        {/* tablet and pc screen */}
        <div className="navbar-search">
          <input type="text" placeholder="Search todo..." />
        </div>
        <ul className="navbar-navs">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Todo List
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/create" className="navbar-link">
              New Todo
            </Link>
          </li>
          <li className="navbar-item">
            <a href="#a" className="navbar-link">
              Update Todo
            </a>
          </li>
        </ul>

        <div className="navbar-notification">
          <button>
            <CircleNotificationsIcon className="navbar-icon" />
          </button>
        </div>
      </div>
      <div className={`navbar-menu ${isShowMenu ? "show" : ""}`}>
        <div className="navbar-search">
          <input type="text" placeholder="Search todo..." />
        </div>
        <ul className="navbar-navs">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Todo List
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/create" className="navbar-link">
              New Todo
            </Link>
          </li>
          <li className="navbar-item">
            <a href="#a" className="navbar-link">
              Update Todo
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
