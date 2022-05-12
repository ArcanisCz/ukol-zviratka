import React from 'react'

// styles
import './Animal.css'

const Animal = ({ value, image, name, latin, id, changeAnimal }) => {
    return (
        <div className="animal" onClick={() => changeAnimal(id)}>
            <div className="animal__image">
                <img src={image} alt={name} />
            </div>
            <div className="animal__desc">
                <div className="animal__name">{name}</div>
                <div className="animal__latin">{latin}</div>
            </div>
        </div>
    )
}

export default Animal