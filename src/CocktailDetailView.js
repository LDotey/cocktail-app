import React from "react";

function CocktailDetailView ({drink, onClose, onAddToFavourites}) {
    console.log(drink)
    return (
        <div className="detail-view">
            <div className="detail-view-content">
                <button onClick={onClose}> X </button>
                <h3>{drink.Name}</h3>
                <ul>{drink.Ingredient1 }</ul>
                <ul>{drink.Ingredient2 }</ul>
                <ul>{drink.Ingredient3 }</ul>
                <ul>{drink.Ingredient4 }</ul>
                <ul>{drink.Ingredient5 }</ul>
                
                <p>{drink.Instructions}</p>
                <button onClick={onAddToFavourites}> 🥃 Add to Favourites 🥃 </button>
            </div>
        </div>
    )

}

export default CocktailDetailView;