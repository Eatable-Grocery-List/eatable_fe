import React, {useState} from "react";
import './RecipeCard.css'; 
import ShoppingList from "../ShoppingList/ShoppingList";

const RecipeCard = ({title, id, image}) => {
  const [shoppingList, setShoppingList] = useState([]);

  function handleCreatingShoppingList() {
    const recipeName = title;
    const endpoint = `http://localhost:5000/api/v1/shopping_list_ingredients/search?recipe_name=${recipeName}`;

    fetch(endpoint)
    .then(response => response.json())
    .then(response=> setShoppingList(response.data.attributes.ingredients));
  }

  return (
    //TODO add ID here as well as key
    <div className="recipe-card" key={id}>
      <p className="card--title">{title}</p>
       <img src={image} className="card-image"/>
       <button className="card--button" onClick={() => handleCreatingShoppingList()} >Add to List</button> 
       <ShoppingList
       id={Date.now()}
       key={Date.now()}
       ingredients = {shoppingList}
       />
    </div>
  )
};

export default RecipeCard;