import React from "react";
import "./style.css";

export const Animal = ({ id, foto, nazev, nazevLatinsky, chooseAnimal }) => {
console.log( id, foto, nazev, nazevLatinsky, chooseAnimal )

  return (
    <div className="animal" onClick={() => chooseAnimal(nazev)}>
      <div className="animal__image">
        <img src={foto} alt={nazev}></img>
      </div>
      <div className="animal__desc">
        <div className="animal__name">{nazev}</div>
        <div className="animal__latin">{nazevLatinsky}</div>
      </div>
    </div>
  );
};
