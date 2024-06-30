import React, {useEffect, useState} from 'react';
import NavBar from './NavBar';
import './App.css';

function App() {
  const [drinks, setDrinks] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/drinks")
    .then((resp) => resp.json())
    .then((data) => console.log(data))
    
  }, [])

  const handleAddDrink = (newDrink) => {
    setDrinks(drinks => [...drinks, newDrink])
    console.log("Added Drink!")
  }

  return (
    <div className="App">
      <hr/>
      A B C Drinkie-poos. 
      <hr/>
      <NavBar/>
      {/* <CocktailList/>
      <CocktailForm/> */}
    </div>
  );
}

export default App;
