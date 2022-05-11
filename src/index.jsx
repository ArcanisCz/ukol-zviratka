import React,{ useEffect, useState } from 'react';
import { render } from 'react-dom';

// styles
import './style.css';

// components
import AnimalDetail from './components/AnimalDetail/AnimalDetail';
import AnimalList from './components/AnimalList/AnimalList';

const App = () => {
  
  const [listOfAnimals, setListOfAnimals] = useState([]);
  const [chosenAnimal, setChosenAnimal] = useState([]);

  // fetching data - zviratka
  useEffect(() => {
    fetch('https://lrolecek.github.io/zviratka-api/zvirata.json')
    .then(response => response.json())
    .then(data => {
      setListOfAnimals(data.zvirata);
      setChosenAnimal(data.zvirata[0]);
    });
  }, [])

  // changing animal detail
  const changeAnimal = (id) => {
    const chosen = listOfAnimals.find(animal => animal.id === id);
    setChosenAnimal(chosen);
  }


  return (
    <>
      <h1>Zvířátka v ZOO</h1>
      <div className="container">
        <AnimalList
          list={listOfAnimals}
          changeAnimal={changeAnimal}
        />
        {chosenAnimal && (
          <AnimalDetail
            image={chosenAnimal.foto}
            name={chosenAnimal.nazev}
            latin={chosenAnimal.nazevLatinsky}
            decsription={chosenAnimal.popis}
            home={chosenAnimal.domovina}
            biotop={chosenAnimal.biotop}
            food={chosenAnimal.potrava}
            size={chosenAnimal.velikost}
          />
        )}
      </div>
    </>
  );
}

render(<App />, document.querySelector('#app'))
