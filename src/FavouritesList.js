import React from "react";
import CocktailItem from "./CocktailItem";
import CocktailDetailView from "./CocktailDetailView";

function FavouritesList({drinks, selectedDrink, handleDetailView, closeDetailView}) {
    console.log(selectedDrink)
    const favouritedDrinks = drinks.filter(drink => drink.Favourited)
    return (
        <section className="favourites-view">
            <h3>Favourites</h3>
            <ul>
                {favouritedDrinks.map((drink) => (
                    <CocktailItem
                    key={drink.id}
                    drink={drink}
                    // setDrinks={setDrinks}
                    handleDetailView={handleDetailView}/>
                    
                ))}
            </ul>
            {selectedDrink ?(
                <CocktailDetailView
                drink={selectedDrink}
                onClose={closeDetailView}
                
                />
            ): null}
        </section>
    )
}




 export default FavouritesList;