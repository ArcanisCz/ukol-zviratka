import React from "react";
import './style.css';
import Animal from "../Animal";
//nezapomínej změnit class na className

const AnimalList = ({animals, onSelectAnimal}) => {
    //console.log(animals)
    
    return (
        <div className="animal-list">
            {animals.map(
                (animal) => {
                    return <Animal 
                        key={animal.id}
                        name={animal.nazev}
                        latin={animal.nazevLatinsky}
                        image={animal.foto}
                        onSelectAnimal={onSelectAnimal}
                        id={animal.id}
                    />
                }
            )}
        </div>
    )
}

export default AnimalList;