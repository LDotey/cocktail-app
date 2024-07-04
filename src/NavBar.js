import React from "react";

function NavBar ({onFavouritesClick, onFormClick}) {
    return (
        <nav>
            <button onClick={onFavouritesClick}>My Favourites</button>
            <button onClick={onFormClick}>Make a Cocktail</button>
        </nav>
    )
}

export default NavBar;