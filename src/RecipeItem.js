import React from "react";

//Displays a single recipe, with a delete button.

function RecipeItem({ recipe, deleteRecipe }) {
  return (
    <tr className="recipe">
        <td>{recipe.name}</td>
        <td>{recipe.cuisine}</td>
        <td><img src={recipe.photo} alt={recipe.name} /></td>
        <td>{recipe.ingredients}</td>
        <td>{recipe.preparation}</td>
        <td>
            <button name="delete" onClick={deleteRecipe}>Delete</button>
        </td>    
    </tr>
  );
}

export default RecipeItem;
