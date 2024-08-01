import React from "react";
import CocktailItem from "./CocktailItem";
import CocktailDetailView from "./CocktailDetailView";

function CocktailList({
  drinks,
  setDrinks,
  selectedDrink,
  handleToggleFavourites,
  handleDetailView,
  closeDetailView,
}) {
  return (
    <div className="body">
      <ul>
        {drinks.map((drink) => (
          <CocktailItem
            key={drink.id}
            drink={drink}
            handleDetailView={handleDetailView}
          />
        ))}
      </ul>
      {selectedDrink ? (
        <CocktailDetailView
          drink={selectedDrink}
          onClose={closeDetailView}
          isFavourited={selectedDrink.Favourited}
          onToggleFavourites={handleToggleFavourites}
        />
      ) : null}
    </div>
  );
}

export default CocktailList;
