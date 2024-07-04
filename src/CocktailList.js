import React, {useState} from "react";
import CocktailItem from "./CocktailItem"
import CocktailDetailView from "./CocktailDetailView";

function CocktailList({drinks, setDrinks}) {
    console.log("CocktailList drinks:", drinks);

    const [selectedDrink, setSelectedDrink] = useState(null)

    function handleDetailView(drink) {
        setSelectedDrink(drink);
    }
    
    function closeDetailView(){
        setSelectedDrink(null);
    }

    function handleAddToFavourites(){
        setDrinks((prevDrinks) => {
            return prevDrinks.map((drink) => {
                if (drink.id === selectedDrink.id) {
                    return {...drink, Favourited:true };
                }
                return drink;
            });
        });
        setSelectedDrink(null);

    }

    return (
        <section className="list-view">
            <ul>
                {drinks.map((drink) => (
                    <CocktailItem
                    key={drink.id}
                    drink={drink}
                    setDrinks={setDrinks}
                    onClick={() => handleDetailView(drink)}
                    />
                ))}
            </ul>
            {selectedDrink && (
        <CocktailDetailView 
        drink={selectedDrink} 
        onClose={closeDetailView} 
        onAddToFavourites={handleAddToFavourites}/>
      )}
        </section>
    )

}

export default CocktailList;