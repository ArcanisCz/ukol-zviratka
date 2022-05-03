import React, { useState, useEffect } from 'react';
import Animal from '../Animal';

const AnimalList = ({ data, onChangeAnimal }) => {

	return (
		<div className="animal-list">
 {data.map((animal) => (
				<Animal
					key={animal.id}
					nazev={animal.nazev}
					foto={animal.foto}
					nazevLatinsky={animal.nazevLatinsky}
					chooseAnimal={chooseAnimal}
					handleClickAnimal={onChangeAnimal} 
				/>
			))
			}
		</div>
	)
}

export default AnimalList;
