import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import AnimalDetail from "./components/AnimalDetail/AnimalDetail";
import AnimalList from "./components/AnimalList/AnimalList";
import "./style.css";

const App = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    fetch("https://lrolecek.github.io/zviratka-api/zvirata.json")
      .then((response) => response.json())
      .then((data) => setAnimals(data.zvirata));
  }, []);

  return (
    <>
      <h1>Zvířátka v ZOO</h1>
      <div className="container">
        <AnimalList animals={animals} />
      </div>
    </>
  );
};

render(<App />, document.querySelector("#app"));
