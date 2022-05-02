import React, {useState, useEffect} from 'react';
import { render } from 'react-dom';
import './style.css';


import { AnimalDetail } from "./components/AnimalDetail/index"
import { AnimalList } from "./components/AnimalList/index"


const App = () => {

  const [animals, setAnimals] = useState([])
  const [selectedAnimal, setSelectedAnimal] = useState({});

  const selectAnimal = (name) => {
    const selectedAnimal = animals.filter((animal) => {return animal.name === name})
    setSelectedAnimal(selectAnimal[0])
  }


  // const fetchAnimals = (() => {
  //   fetch('https://lrolecek.github.io/zviratka-api/zvirata.json')
  //   .then((response) => response.json())
  //   .then((data) => {setAnimals(data.zvirata)
  //     setSelectedAnimal(data.zvirata[0])
  //     })
  // },
  // []
  // )
  
  useEffect (() => {
    fetch('https://lrolecek.github.io/zviratka-api/zvirata.json')
    .then((response) => response.json())
    .then((data) => {setAnimals(data.zvirata)
      setSelectedAnimal(data.zvirata[0])
      })
  },
  []
  )

  return (
    <>
      <h1>Zvířátka v ZOO</h1>
        
      <div className="container">
        <AnimalList animals={animals} chooseAnimal={selectAnimal} />
        <AnimalDetail animal={selectedAnimal} />
        
      </div>
    </>
  );
}

render(<App />, document.querySelector('#app'));



