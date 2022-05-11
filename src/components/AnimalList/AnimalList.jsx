import React from "react";
import Animal from "../Animal/Animal";

const AnimalList = ({ animals, handleOnClick }) => {
  return (
    <div className="animal-list">
      {animals.map((item) => {
        return (
          <Animal item={item} key={item.id} handleOnClick={handleOnClick} />
        );
      })}
    </div>
  );
};

export default AnimalList;
