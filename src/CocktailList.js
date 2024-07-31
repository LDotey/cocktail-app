import React from "react";
import CocktailItem from "./CocktailItem"
import CocktailDetailView from "./CocktailDetailView"

function CocktailList({drinks, setDrinks, selectedDrink, handleToggleFavourites, handleDetailView, closeDetailView}) {
  

  
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
        onToggleFavourites={handleToggleFavourites}/>
      ): null}
      
     
        </div>
    )

}

export default CocktailList;




            // This code moved to App to allow the function to be passed more thoroughly throughout the app. 
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

 