import React, {useState} from "react";
import './RecipeCard.css'; 
import IngredientsList from "../IngredientsList/IngredientsList";

const RecipeCard = ({title, id, image}) => {
  const [ingredientsList, setIngredientsList] = useState([]);
  const [buttonText, setButtonTest] = useState("See Ingredients");
  const [showIngredients, setShowIngredients] = useState(false);
  function handleListingIngredients() {
    const recipeName = title;
    const endpoint = `http://localhost:5000/api/v1/shopping_list_ingredients/search?recipe_name=${recipeName}`;

    fetch(endpoint)
    .then(response => response.json())
    .then(response=> setIngredientsList(response.data.attributes.ingredients));

  setButtonTest(buttonText === "See Ingredients" ? "Hide Ingredients" : "See Ingredients");

  setShowIngredients(!showIngredients);
}
  return (
    //TODO add ID here as well as key
    <div className="recipe-card" key={id}>
      <p className="card--title">{title}</p>
       <img src={image} className="card-image"/>
       <button className="card--button" onClick={() => handleListingIngredients()} >{buttonText}</button> 
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