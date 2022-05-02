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
      .then(res => res.json())
      .then((data)=>setAppData(data.zvirata))
    },
    []
  )

  return (
    <>
      <h1>Zvířátka v ZOO</h1>
      {console.log(appData)}

      <div className="container">
      <AnimalList animals={appData} />
      {console.log(appData)}
      
      </div>
    </>
  );
}

render(<App />, document.querySelector('#app'));
