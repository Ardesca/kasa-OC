import React from "react";
import "./css/banner.css";

const Banner = ({ image, texte }) => {
  return (
    <div className="banner">
      <img
        className="banner-img"
        src={image}
        alt="un fond de montagne equivalent à la banniere"
      />
      <span className="banner-txt">{texte}</span>
    </div>
  );
};

export default Banner;
