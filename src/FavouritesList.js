import React from "react";
import CocktailItem from "./CocktailItem";

function FavouritesList({drinks, setDrinks, handleDetailView}) {
    console.log(handleDetailView)
    const favouritedDrinks = drinks.filter(drink => drink.Favourited)
    return (
        <section className="favourites-view">
            <h3>Favourites</h3>
            <ul>
                {favouritedDrinks.map((drink) => (
                    <CocktailItem
                    key={drink.id}
                    drink={drink}
                    setDrinks={setDrinks}
                    onClick={() => handleDetailView(drink)}/>
                ))}
            </ul>
        </section>
    )
}




 export default FavouritesList;