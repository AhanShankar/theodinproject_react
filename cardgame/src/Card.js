import React, { useEffect, useState } from "react";
import "./Card.css";
const Card = ({ name, description,add_record,source }) => {
  return (
    <div
      className="card"
      onClick={() => {
        add_record(name);
      }}
    >
      <img src={source}></img>
      <div className="card_name">{name}</div>
      <div className="card_description">{description}</div>
    </div>
  );
};

export default Card;
