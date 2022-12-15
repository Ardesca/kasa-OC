import React from "react";
import "./css/card.css";

const Card = ({ id, image, titre }) => {
  return (
    <div className="card" id={id}>
      <div className="card__img">
        <img src={ image } alt="card" />
      </div>
      <div className="card-sombre"></div>
      <span className="card-titre">{titre}</span>
    </div>
  );
};

export default Card;

