import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import AnimalList from './components/AnimalList';
import AnimalDetail from './components/AnimalDetail';

const App = () => {

  const[appData, setAppData] = useState(["wtf0", 'wtf1', "wtf2", "wtf"]);
  
  useEffect(
    ()=>{
      fetch('https://lrolecek.github.io/zviratka-api/zvirata.json')
      .then( res => res.json())
      .then((data)=>setAppData(data.zvirata))
    },
    []
  )

  const showDetail = (animal) =>{
    setSelectedAnimal(animal)
  }
  const[selectedAnimal, setSelectedAnimal] = useState(null)

  return (
    <>
      <h1>Zvířátka v ZOO</h1>     
      <div className="container">
      <AnimalList animals={appData} selFn={showDetail} />
      <AnimalDetail animal={selectedAnimal===null ? appData[0] :selectedAnimal} />
      </div>
    </>
  );
}

render(<App />, document.querySelector('#app'));
