import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import AnimalDetail from "./components/AnimalDetail/AnimalDetail";
import AnimalList from "./components/AnimalList/AnimalList";
import Search from "./components/Search/Search";
import "./style.css";

const App = () => {
  const [animals, setAnimals] = useState([]);
  const [animalDetail, setAnimalDetail] = useState(animals[0]);
  const [zooParks, setZooParks] = useState(null);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetch("https://lrolecek.github.io/zviratka-api/zvirata.json")
      .then((response) => response.json())
      .then((data) => {
        setAnimals(data.zvirata);
        setAnimalDetail(data.zvirata[0]);
      })
      .catch((err) => console.log(err.message));

    fetch("https://lrolecek.github.io/zviratka-api/zoo.json")
      .then((response) => response.json())
      .then((data) => {
        setZooParks(data.zoo);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const handleOnClick = (id) => {
    const filteredAnimal = animals.filter((item) => item.id === id)[0];
    setAnimalDetail(filteredAnimal);
  };

  const searchAnimals = () => {
    const searchResult = animals.filter(
      (animal) =>
        animal.nazev.toLowerCase().includes(inputValue.toLowerCase()) ||
        animal.nazevLatinsky.toLowerCase().includes(inputValue.toLowerCase())
    );

    return searchResult;
  };

  return (
    <div className="container">
      <h1>Zvířátka v ZOO</h1>
      <Search setInputValue={setInputValue} inputValue={inputValue} />
      <div className="grid-container">
        <AnimalList animals={searchAnimals()} handleOnClick={handleOnClick} />
        {animalDetail && zooParks && (
          <AnimalDetail animalDetail={animalDetail} zooParks={zooParks} />
        )}
      </div>
    </div>
  );
};

render(<App />, document.querySelector("#app"));
