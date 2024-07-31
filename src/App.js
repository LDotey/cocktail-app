import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import CocktailList from "./CocktailList";
import "./App.css";
import FavouritesList from "./FavouritesList";
import CocktailForm from "./CocktailForm";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";

function App() {
  const [drinks, setDrinks] = useState([]);
  const [selectedDrink, setSelectedDrink] = useState(null);

  function handleToggleFavourites() {
    if (selectedDrink) {
      setDrinks((prevDrinks) => {
        return prevDrinks.map((drink) => {
          if (drink.id === selectedDrink.id) {
            return { ...drink, Favourited: !drink.Favourited };
          }
          return drink;
        });
      });
      setSelectedDrink((prev) =>
        prev ? { ...prev, Favourited: !prev.Fvourited } : null
      );
    }
  }

  // This was the previous function I used
  // prior to refactoring to allow for handleToggleFavourites

  // function handleAddToFavourites(){
  //       setDrinks((prevDrinks) => {
  //           return prevDrinks.map((drink) => {
  //               if (drink.id === selectedDrink.id) {
  //                   return {...drink, Favourited:true };
  //               }
  //               return drink;
  //           });
  //       });
  //       setSelectedDrink(null);

  //   }
  function handleDetailView(drink) {
    setSelectedDrink(drink);
  }
  function closeDetailView() {
    setSelectedDrink(null);
  }

  useEffect(() => {
    fetch("http://localhost:3000/drinks")
      .then((resp) => resp.json())
      .then((data) => setDrinks(data))
      .catch((error) => console.error("Error fetching drinks:", error));
  }, []);

  return (
    <div>
      <header className="App">
        <hr className="style" />A B C Drinkie-poos
        <hr className="style" />
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/cocktails"
          element={
            <CocktailList
              drinks={drinks}
              setDrinks={setDrinks}
              selectedDrink={selectedDrink}
              setSelectedDrink={setSelectedDrink}
              handleToggleFavourites={handleToggleFavourites}
              handleDetailView={handleDetailView}
              closeDetailView={closeDetailView}
            />
          }
        />
        <Route
          path="/favourites"
          element={
            <FavouritesList
              drinks={drinks}
              selectedDrink={selectedDrink}
              handleDetailView={handleDetailView}
              closeDetailView={closeDetailView}
              handleToggleFavourites={handleToggleFavourites}
            />
          }
        />
        <Route
          path="/form"
          element={<CocktailForm drinks={drinks} setDrinks={setDrinks} />}
        />
      </Routes>
    </div>
  );
}

export default App;

// ** these were passed to NavBar before routes were added to allow for toggling between components
// onFavouritesClick={toggleFavourites}
// onFormClick={toggleForm}
// const [showFavourites, setShowFavourites] = useState(false)
// const [showForm, setShowForm] = useState()

// function toggleForm () {
//   setShowForm(prevShowForm => !prevShowForm)
// }

// function toggleFavourites () {
//   setShowFavourites (prevShowFavourites => !prevShowFavourites)
// }

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
