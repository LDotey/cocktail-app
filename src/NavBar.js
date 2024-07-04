import React from "react";

function NavBar ({onFavouritesClick}) {
    return (
        <nav>
            <button onClick={onFavouritesClick}>My Favourites</button>
            <button>Make a Cocktail</button>
        </nav>
    )
}

export default NavBar;