import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState({ ...initialFormState });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe(formData);
    setFormData({ ...initialFormState });
  };

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers.
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td><input id="name" name="name" value={formData.name} required={true} onChange={handleChange} placeholder="Name"/></td>
            <td><input id="cuisine" name="cuisine" value={formData.cuisine} required={true} onChange={handleChange} placeholder="Cuisine"/></td>
            <td><input id="photo" name="photo" type="url" value={formData.photo} required={true} onChange={handleChange} placeholder="URL"/></td>
            <td><textarea id="ingredients" name="ingredients" value={formData.ingredients} required={true} onChange={handleChange} placeholder="Ingredients"/></td>
            <td><textarea id="preparation" name="preparation" value={formData.preparation} required={true} onChange={handleChange} placeholder="Preparation"/></td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
