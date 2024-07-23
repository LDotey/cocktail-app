import React from "react";
import { NavLink } from "react-router-dom";

function NavBar ({onFavouritesClick, onFormClick}) {
    return (
        <nav>
            <NavLink
            to="/"
            ></NavLink>
            <NavLink
            to="/cocktails"
            > Browse Cocktails</NavLink>
            <NavLink
            to="/favourites"
            >Favourites List</NavLink>
            <NavLink
            to="/form"
            >Create a Cocktail</NavLink>

        </nav>


        // <nav className="App">
        //      <hr className="style"/>
        //     <h1>  A B C Drinkie-poos. </h1>
        //     <hr className="style"/>
        //     <button onClick={onFavouritesClick}>My Favourites</button>
        //     <button onClick={onFormClick}>Make a Cocktail</button>
        // </nav>
    )
}

export default NavBar;