import React from "react";

function CocktailDetailView ({drink, onClose, onAddToFavourites}) {
    return (
        <div className="detail-view">
            <div className="detail-view-content">
                <button onClick={onClose}> X </button>
                <h3>{drink.Name}</h3>
                <p>{drink.Instructions}</p>
                <button onClick={onAddToFavourites}> 🥃 </button>
            </div>
        </div>
    )

}

export default CocktailDetailView;