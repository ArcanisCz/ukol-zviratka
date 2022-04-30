import React from "react";
import Animal from "../Animal";
//nezapomínej změnit class na className

const AnimalList = ({animals}) => {
    
    console.log(animals)
    
    return (
        <div className="animal-list">
            {animals.map(
                (animal) => {
                    return <Animal 
                        key={animal.id}
                        name={animal.nazev}
                        latin={animal.nazevLatinsky}
                        image={animal.foto}
                    />
                }
            )}
        </div>
    )
}

export default AnimalList;