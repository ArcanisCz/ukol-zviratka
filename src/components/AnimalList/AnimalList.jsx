import React from "react";
import Animal from "../Animal/animal";

const AnimalList = ({ animals }) => {
  return (
    <div className="animal-list">
      {animals.map((item) => {
        return <Animal item={item} key={item.id} />;
      })}
    </div>
  );
};

export default AnimalList;
