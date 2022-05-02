import React from 'react';
import './style.css'
import Animal from '../Animal';

const AnimalList = ({animals}) => {
    return (<div class="animal-list">
        {animals.map(zvire => <Animal animal={zvire} />)}
    </div>)
}

export default AnimalList;