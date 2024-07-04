import React, {useState} from "react";

function CocktailForm() {
    const [formData, setFormData] = useState({
        id: 0,
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
        console.log(formData)

    }
    return(
        <section>
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