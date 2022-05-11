import React from 'react'

// components
import Animal from '../Animal/Animal'

const AnimalList = ({ list, changeAnimal }) => {
    return (
        <div className="animal-list">
            {list.map(item => (
                <Animal 
                    id={item.id}
                    image={item.foto}
                    name={item.nazev}
                    latin={item.nazevLatinsky}
                    changeAnimal={changeAnimal}
                />
            ))}
        </div>
    )
}

export default AnimalList