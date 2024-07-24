import React from "react";
import { NavLink } from "react-router-dom";

function NavBar ({onFavouritesClick, onFormClick}) {
    return (
        
        <nav className="header">
            <NavLink
            to="/" exact
            > </NavLink>
            
            <NavLink
            to="/cocktails"
            className="link"> Browse Cocktails</NavLink>
            <NavLink
            to="/favourites"
            className="link">Favourites List</NavLink>
            <NavLink
            to="/form"
            className="link">Create a Cocktail</NavLink>

        </nav>

    )
}

export default NavBar;