import React, {useState} from "react";
import './RecipeCard.css'; 
import IngredientsList from "../IngredientsList/IngredientsList";

const RecipeCard = ({title, id, image, handleAddToShoppingList}) => {
  const [ingredientsList, setIngredientsList] = useState([]);
  const [ingredientsButtonText, setIngredientsButtonText] = useState("See Ingredients");
  const [showIngredients, setShowIngredients] = useState(false);
  const [listbuttonText, setListButtonText] = useState(false);

  const handleListingIngredients = () => {
    const recipeName = title;
    const endpoint = `http://localhost:5000/api/v1/shopping_list_ingredients/search?recipe_name=${recipeName}`;

    fetch(endpoint)
    .then(response => response.json())
    .then(response=> setIngredientsList(response.data.attributes.ingredients));

    setIngredientsButtonText(ingredientsButtonText === "See Ingredients" ? "Hide Ingredients" : "See Ingredients");
    setShowIngredients(!showIngredients);
  }

  return (
    //TODO add ID here as well as key
    <div className="recipe-card" key={id}>
      <p className="card--title">{title}</p>
       <img src={image} className="card-image"/>
       <div className="buttons-container">
          <button className="see--ingredients--button" onClick={() => handleListingIngredients()} >{ingredientsButtonText}</button> 
          <button className="shopping--list--button" onClick={() => handleAddToShoppingList(ingredientsList)}>Add To Shopping List</button>
       </div>
       {showIngredients && (
        <IngredientsList
        id={Date.now()}
        key={Date.now()}
        ingredients = {ingredientsList}
        />
       )}
    </div>
  )
};

export default RecipeCard;