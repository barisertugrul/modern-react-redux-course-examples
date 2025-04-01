import "./App.css";
import { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimal() {
  // const animalEmojies = ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯"];
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
  const randomIndex = Math.floor(Math.random() * animals.length);
  return animals[randomIndex];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    /* setAnimals((prevAnimals) => {
      const newAnimal = getRandomAnimal();
      return [...prevAnimals, newAnimal];
    }); */

    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow key={index} type={animal} />;
  });

  return (
      <div className="App">
        <button onClick={handleClick}>Add Animal</button>
        <div className="animal-list">{renderedAnimals}</div>
      </div>
  );
}

export default App;
