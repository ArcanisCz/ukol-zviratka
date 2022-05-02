import React, {useState, useEffect} from 'react';
import { render } from 'react-dom';
import './style.css';


import { AnimalDetail } from "./components/AnimalList/index"
import { AnimalList } from "./components/AnimalList/index"


const App = () => {

  const [animal, setAnimal] = useState([])
  const [selectedAnimal, setSelectedAnimal] = useState('Slon africký');


  const fetchAnimals = () => {
    fetch('https://lrolecek.github.io/zviratka-api/zvirata.json')
    .then((response) => response.json())
    .then((animal) => setAnimal(animal.animals))
  }
  
  useEffect (() => {
    fetchAnimals();
  }, [])

  const chooseAnimal = (selectedAnimal) => {
    setSelectedAnimal(selectedAnimal);
  };

  return (
    <>
      <h1>Zvířátka v ZOO</h1>
        
      <div className="container">
        {animal && <AnimalList animals={animal} chooseAnimal={chooseAnimal} />}
        
      </div>
    </>
  );
}

render(<App />, document.querySelector('#app'));
