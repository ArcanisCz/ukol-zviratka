import React from "react";
import './style.css';
//nezapomínej změnit class na className

const Animal = ({id, image, name, latin, onSelectAnimal}) => {

    return (
        <div className="animal" onClick={() => onSelectAnimal(id)}>
            <div className="animal__image">
                <img src={image} alt="slon" />
            </div>
            <div className="animal__desc">
                <div className="animal__name">{name}</div>
                <div className="animal__latin">{latin}</div>
            </div>
        </div>
    )
}

export default Animal;