import React from "react";
import "./style.css";

export const Animal = ({ id, image, name, latin, chooseAnimal }) => {


  return (
    <div className="animal" onClick={() => chooseAnimal(id)}>
      <div className="animal__image">
        <img src={image} alt={name}></img>
      </div>
      <div className="animal__desc">
        <div className="animal__name">{name}</div>
        <div className="animal__latin">{latin}</div>
      </div>
    </div>
  );
};
