import React from "react";
import './IngredientsList.css'; 
//Function to map over ingredients

const IngredientsList = ({ingredients, id}) => {
  return (
    <div className="ingredients-list" key={id}>
    <ul>
        {ingredients.map(ingredient => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </div>
  )
}

export default IngredientsList;