import React from "react";

function CocktailItem ({drink, handleDetailView}) {
   console.log(drink, handleDetailView)

return (
    <ul onClick={() => {handleDetailView(drink)}}>
        <h5>{drink.Name}</h5>
    </ul>
)
}
export default CocktailItem;