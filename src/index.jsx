import React, {useState, useEffect} from 'react';
import { render } from 'react-dom';
import './style.css';

import AnimalList from "./components/AnimalList";
import AnimalDetail from "./components/AnimalDetail";
import Search from "./components/Search";


const App = () => {

  const [animals, setAnimals] = useState([]);
  const [chosenAnimal, setChosenAnimal] = useState({});
  const [zooList, setZooList] = useState([])
  console.log(animals)

  const selectAnimal = (id) => {
    const selectedAnimal = animals.find(animal => animal.id === id)
    setChosenAnimal(selectedAnimal)
  }

  const searchAnimal = (result) => {
    console.log(result)
    const shoda = animals.filter((item) => {return item.nazev.includes(result)})
		setAnimals(shoda)
  }

  useEffect (
    () => {
      fetch("https://lrolecek.github.io/zviratka-api/zvirata.json")
      .then(response => response.json())
      .then(data => {
        setAnimals(data.zvirata)
        setChosenAnimal(data.zvirata[0])
      });
      fetch("https://lrolecek.github.io/zviratka-api/zoo.json")
		  .then(response => response.json())
		  .then(data => {
			  setZooList(data.zoo)
		  })
    },
    []
  );

  return (
    <>
      <h1>Zvířátka v ZOO</h1>

      <div className="container">
        
        {/* zde budou jednotlivé komponenty */}
        <Search onSearchAnimal={searchAnimal}/>
        <AnimalList animals={animals} onSelectAnimal={selectAnimal}/>
        <AnimalDetail animal={chosenAnimal} zooList={zooList}/>
      </div>
    </>
  );
}

render(<App />, document.querySelector('#app'));
