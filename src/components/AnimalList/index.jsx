import React from 'react';
import './style.css'
import Animal from '../Animal';

const AnimalList = ({animals, selFn}) => {
    return (<div className="animal-list">
        {animals.map(zvire => <Animal animal={zvire} key={zvire.id} selectFunction={selFn} />)}
    </div>)
}

export default AnimalList;