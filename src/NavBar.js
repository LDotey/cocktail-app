import React from "react";

function NavBar ({onFavouritesClick, onFormClick}) {
    return (
        <nav className="App">
             <hr class="style"/>
            <h1>  A B C Drinkie-poos. </h1>
            <hr class="style"/>
            <button style={{backgroundcolor:"blue"}} onClick={onFavouritesClick}>My Favourites</button>
            <button color="orange"onClick={onFormClick}>Make a Cocktail</button>
        </nav>
    )
}

export default NavBar;