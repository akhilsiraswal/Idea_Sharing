import React from "react";
import "./css/Sidebar.css";
import User from "../assets/icons/user.png";
import feed from "../assets/icons/rss.png";
import Add from "../assets/icons/add.png";
import Dash from "../assets/icons/dashboard.png";

function Sidebar() {
  return (
    <div className="sidebar">
      <a href="/auth" id="user">
        <img src={User} alt="" />
      </a>
      <ul className="items">
        <a href="/user/feed">
          <img src={feed} alt="" />
        </a>
        <a href="/user/dashboard#post">
          <img src={Add} alt="" />
        </a>
        <a href="/user/dashboard#posts">
          <img src={Dash} alt="" />
        </a>
      </ul>
    </div>
  );
}

export default Sidebar;
