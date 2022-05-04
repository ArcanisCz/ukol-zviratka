import React from 'react';
import Animal from '../Animal';

const AnimalList = ({ data, chooseAnimal }) => {

	return (
		<div className="animal-list">
			{data.map((animal) => (
				<Animal
					key={animal.id}
					nazev={animal.nazev}
					foto={animal.foto}
					nazevLatinsky={animal.nazevLatinsky}
					chooseAnimal={chooseAnimal}
				/>
			))
			}
		</div>
	)
}

export default AnimalList;
