import React from "react";
import "./style.css"
import { Animal } from "./../Animal/index"

export const AnimalList = ({animals, chooseAnimal }) => {
    console.log(animals)

    return (
        <div className="animals">
            {animals.map((animal) => (
                <Animal key={animal.id}
                        nazev={animal.nazev}
                        foto={animal.foto}
                        nazevLatinsky={animal.nazevLatinsky}
                        chooseAnimal={chooseAnimal} />))}
        
        </div>
    )
}

