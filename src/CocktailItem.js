import React from "react";

function CocktailItem ({drink, onClick}) {
    // const {id, Drink, Category, Glass} = drinks;


return (
    <ul onClick={onClick}>
        <h5>{drink.Name}</h5>
    </ul>
)
}
export default CocktailItem;