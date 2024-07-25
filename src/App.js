import React, {useEffect, useState} from 'react';
import NavBar from './NavBar';
import CocktailList from './CocktailList';
import './App.css';
import FavouritesList from './FavouritesList';
import CocktailForm from './CocktailForm';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [drinks, setDrinks] = useState([])
  const [selectedDrink, setSelectedDrink] = useState(null)
console.log(selectedDrink)
  const [showFavourites, setShowFavourites] = useState(false)
  const [showForm, setShowForm] = useState()

  console.log(drinks)


  // function toggleForm () {
  //   setShowForm(prevShowForm => !prevShowForm)
  // }

  // function toggleFavourites () {
  //   setShowFavourites (prevShowFavourites => !prevShowFavourites)
  // }

  function handleAddToFavourites(){
        setDrinks((prevDrinks) => {
            return prevDrinks.map((drink) => {
                if (drink.id === selectedDrink.id) {
                    return {...drink, Favourited:true };
                }
                return drink;
            });
        });
        setSelectedDrink(null);

    }
    function handleDetailView(drink) {
      setSelectedDrink(drink);
    }
    function closeDetailView(){
      setSelectedDrink(null);
  }
   
 

  useEffect(() => {
    fetch("http://localhost:3000/drinks")
    .then((resp) => resp.json())
    .then((data) => setDrinks(data))
    .catch((error) => console.error('Error fetching drinks:', error));

    console.log(drinks)
  }, [])
  
  return (
    
    <div className="App">
      <header>
      <hr className='style'/>A B C Drinkie-poos<hr className='style'/>
        <NavBar 
          // onFavouritesClick={toggleFavourites} 
          // onFormClick={toggleForm}
        />
      </header>
      <Routes>
        <Route path="/cocktails" element={
        <CocktailList 
        drinks={drinks} 
        setDrinks={setDrinks} 
        selectedDrink={selectedDrink}
        setSelectedDrink={setSelectedDrink}
        handleAddToFavourites={handleAddToFavourites}
        handleDetailView={handleDetailView}
        closeDetailView={closeDetailView}
        />} />
        <Route path="/favourites" element={
        <FavouritesList 
        drinks={drinks} 
        selectedDrink={selectedDrink}
        handleDetailView={handleDetailView}
        closeDetailView={closeDetailView}
        />} />
        <Route path="/form" element={
        <CocktailForm 
        drinks={drinks} 
        setDrinks={setDrinks} />} />
      </Routes>
    </div>
  );
}

export default App;







  // return (
  //   <>
  //   <header>
  //     <NavBar/>
  //   </header>
  //   <Outlet context={drinks}/>

  //   </>

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
//   );
// }

// export default App;
