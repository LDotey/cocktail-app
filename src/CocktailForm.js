import React, {useState} from "react";

function CocktailForm({drinks, setDrinks}) {
    const [formData, setFormData] = useState({
        Favourited: false,
        Name: "",
        Glass: "",
        Instructions: "",
        Ingredient1: "",
        Ingredient2: "",
        Ingredient3: "",
        Ingredient4: "",
        Ingredient5: "",
    })

    function handleChange(event){
        setFormData({...formData, 
            [event.target.name]: event.target.value
        });
    }

    function handleSubmit(event){
        event.preventDefault();

        // const newId = (drinks.length +1).toString()

        // const newDrink = {...formData, }
        // console.log(newDrink)

        // setDrinks([...drinks, newDrink])

        setFormData({
            
            Favourited: false,
            Name: "",
            Glass: "",
            Instructions: "",
            Ingredient1: "",
            Ingredient2: "",
            Ingredient3: "",
            Ingredient4: "",
            Ingredient5: "",
        })

        fetch ("http://localhost:3000/drinks", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(formData)
        })
        .then((resp) => resp.json())
        .then((newDrink) => setDrinks(prevDrinks => [...prevDrinks, newDrink]))

    }

    const newForm = {
        Name: formData.Name,
        Glass: formData.Glass,
        Ingredient1: formData.Ingredient1,
        Ingredient2: formData.Ingredient2,
        Ingredient3: formData.Ingredient3,
        Ingredient4: formData.Ingredient4,
        Ingredient5: formData.Ingredient5,
        Instructions: formData.Instructions

    }
    return(
        <section className="form-view">
            <h2>Make A Cocktail</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Cocktail Name:
                    <input
                    type="text"
                    name="Name"
                    value={formData.Name}
                    onChange={handleChange}
                    />
                </label>
                <label>
                    Type of Glass:
                    <input
                    type="text"
                    name="Glass"
                    value={formData.Glass}
                    onChange={handleChange}
                    />
                </label>
                <label>
                    Ingredient 1:
                    <input
                    type="text"
                    name="Ingredient1"
                    value={formData.Ingredient1}
                    onChange={handleChange}
                    />
                </label>
                <label>
                    Ingredient 2:
                    <input
                    type="text"
                    name="Ingredient2"
                    value={formData.Ingredient2}
                    onChange={handleChange}
                    />
                </label>
                <label>
                    Ingredient 3:
                    <input
                    type="text"
                    name="Ingredient3"
                    value={formData.Ingredient3}
                    onChange={handleChange}
                    />
                </label>
                <label>
                    Ingredient 4:
                    <input
                    type="text"
                    name="Ingredient4"
                    value={formData.Ingredient4}
                    onChange={handleChange}
                    />
                </label>
                <label>
                    Ingredient 5:
                    <input
                    type="text"
                    name="Ingredient5"
                    value={formData.Ingredient5}
                    onChange={handleChange}
                    />
                </label>
                <label>
                    Instructions:
                    <input
                    type="text"
                    name="Instructions"
                    value={formData.Instructions}
                    onChange={handleChange}
                    />
                </label>

            <button type="submit"> Add Cocktail </button>
            </form>
        </section>
    )

}

export default CocktailForm;