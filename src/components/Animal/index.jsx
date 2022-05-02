import React from 'react';
import './style.css'

const Animal = ({animal}) => {

return(<div class="animal">
<div class="animal__image">
    <img src="image" alt="slon"/>
</div>
<div class="animal__desc">
    <p>zvire komponenta</p>
    <div class="animal__name">{animal.nazev}</div>
    <div class="animal__latin">{animal.nazevLatinsky}</div>
</div>
</div>)
}

export default Animal;