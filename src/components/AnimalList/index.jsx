import React from "react";
import "./style.css"
import { Animal } from "./../Animal/index"

export const AnimalList = ({animals, chooseAnimal }) => {

    return (
        <div className="animals">
            {animals.map((animal) => (
                <Animal key={animal.id}
                        name={animal.name}
                        image={animal.image}
                        latin={animal.latin}
                        chooseAnimal={chooseAnimal} />))}
        
        </div>
    )
}

