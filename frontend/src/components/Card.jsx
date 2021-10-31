import React from "react";
import "./css/Card.css";
import user from "../assets/icons/user.png";
import like from "../assets/icons/like.png";

function Card({ profile, username, quote, likes }) {
  return (
    <div className="Card">
      <header>
        <img src={user} className="user_profile" alt="" />
        <p className="username">{username}</p>
      </header>
      <div className="idea-section">{quote}</div>
      <footer>
        <button className="btn">
          <img src={like} alt="" />
          {likes}
        </button>
      </footer>
    </div>
  );
}

export default Card;
