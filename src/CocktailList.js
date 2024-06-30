import React from "react";

function CocktailList({drinks, setDrinks}) {

    function handleDetailView() {

    }

    return (
        <section>
            <ul>
                {drinks.map((drink) => (
                    <QuestionItem/>
                ))}
            </ul>
        </section>
    )

}