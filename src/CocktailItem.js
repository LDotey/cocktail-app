import React from "react";

function CocktailItem ({drink, onClick}) {
    // const {id, Drink, Category, Glass} = drinks;


return (
    <ul onClick={onClick}>
        <h6>{drink.Name}</h6>
    </ul>
)
}
export default CocktailItem;