import React from "react";

function CocktailItem ({drink, onClick}) {
   

return (
    <ul onClick={onClick}>
        <h5>{drink.Name}</h5>
    </ul>
)
}
export default CocktailItem;