import React from "react";
import CocktailItem from "./CocktailItem"
import CocktailDetailView from "./CocktailDetailView"

function CocktailList({drinks, selectedDrink, handleAddToFavourites, handleDetailView, closeDetailView}) {
  

    // const [selectedDrink, setSelectedDrink] = useState(null)

    // function handleDetailView(drink) {
    //     setSelectedDrink(drink);
    // }
    
    // function closeDetailView(){
    //     setSelectedDrink(null);
    // }

    // function handleAddToFavourites(){
    //     setDrinks((prevDrinks) => {
    //         return prevDrinks.map((drink) => {
    //             if (drink.id === selectedDrink.id) {
    //                 return {...drink, Favourited:true };
    //             }
    //             return drink;
    //         });
    //     });
    //     setSelectedDrink(null);

    // }
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
        onAddToFavourites={handleAddToFavourites}/>
      ): null}
      
     
        </div>
    )

}

export default CocktailList;


 