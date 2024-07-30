import React from "react";
import CocktailItem from "./CocktailItem";
import CocktailDetailView from "./CocktailDetailView";

function FavouritesList({drinks, selectedDrink, handleDetailView, closeDetailView, handleToggleFavourites}) {

    const favouritedDrinks = drinks.filter(drink => drink.Favourited)
    return (
        <section className="favourites-view">
            <h3>Favourites</h3>
            <ul>
                {favouritedDrinks.map((drink) => (
                    <CocktailItem
                    key={drink.id}
                    drink={drink}
                    handleDetailView={handleDetailView}/>
                    
                ))}
            </ul>
            {selectedDrink ?(
                <CocktailDetailView
                drink={selectedDrink}
                onClose={closeDetailView}
                isFavourited={selectedDrink.Favourited}
                onToggleFavourites={handleToggleFavourites}
                
                />
            ): null}
        </section>
    )
}




 export default FavouritesList;