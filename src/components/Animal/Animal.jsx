import React from "react";
import "./style.css";

const Animal = ({ item, handleOnClick }) => {
  const { id, nazev, nazevLatinsky, foto } = item;
  return (
    <div className="animal" onClick={() => handleOnClick(id)}>
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
