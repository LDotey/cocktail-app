import React, {useEffect, useState} from 'react';
import NavBar from './NavBar';
import CocktailList from './CocktailList';
import './App.css';
import FavouritesList from './FavouritesList';
import CocktailForm from './CocktailForm';
import { Outlet } from 'react-router-dom';

function App() {
  const [drinks, setDrinks] = useState([])
  const [showFavourites, setShowFavourites] = useState(false)
  const [showForm, setShowForm] = useState()


  function toggleForm () {
    setShowForm(prevShowForm => !prevShowForm)
  }

  function toggleFavourites () {
    setShowFavourites (prevShowFavourites => !prevShowFavourites)
  }

  useEffect(() => {
    fetch("http://localhost:3000/drinks")
    .then((resp) => resp.json())
    .then((data) => setDrinks(data))
    
  }, [])

  return (
    <>
    <header>
      <NavBar/>
    </header>
    <Outlet/>
    </>

    // <div >
    //   <NavBar 
    //   onFavouritesClick={toggleFavourites} 
    //   onFormClick={toggleForm}/>
    //   <CocktailList 
    //   drinks={drinks} 
    //   setDrinks={setDrinks}
    //   />
    //   {showFavourites && <FavouritesList drinks={drinks}/>}
    //   {showForm && <CocktailForm drinks={drinks} setDrinks={setDrinks}/>}
    // </div>
  );
}

export default App;
