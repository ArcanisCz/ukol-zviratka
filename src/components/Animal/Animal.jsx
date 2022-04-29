import React from "react";
import "./style.css";

const Animal = ({ item }) => {
  const { nazev, nazevLatinsky, foto } = item;
  return (
    <div className="animal">
      <div className="animal__image">
        <img src={foto} alt="" />
      </div>
      <div className="animal__desc">
        <div className="animal__name">{nazev}</div>
        <div className="animal__latin">{nazevLatinsky}</div>
      </div>
    </div>
  );
};

export default Animal;
