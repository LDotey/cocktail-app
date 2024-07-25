import React, {useState} from "react";
import CocktailItem from "./CocktailItem"
import CocktailDetailView from "./CocktailDetailView"

function CocktailList({drinks, setDrinks}) {
  
    console.log(drinks)

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
        <div className="body">
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
      
     
        </div>
    )

}

export default CocktailList;


 {/* <Outlet context={drinks}/>
                {drinksList} */}

  // const drinks = useOutletContext();
    // const drinksList = drinks.map((drink) => (
    //     <CocktailItem
    //                 key={drink.id}
    //                 drink={drink}
    //                 setDrinks={setDrinks}
    //                 onClick={() => handleDetailView(drink)}
    //                 />
    // ))