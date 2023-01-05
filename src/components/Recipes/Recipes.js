import React, {useState} from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import './Recipes.css'

const Recipes = ({recipes}) => {
  const [shoppingList, setShoppingList] = useState([]);
  const [shoppingListButtonText, setShoppingListButtonText] = useState("Add To Shopping List");

  const handleAddToShoppingList = (ingredientsList) => {
    setShoppingList([...shoppingList,...ingredientsList])
    console.log(shoppingList); //TODO take this out once I fix bug of needing to click twice.

    setShoppingListButtonText(shoppingListButtonText === "Add To Shopping List" ? "Added to Shopping List" : "Add To Shopping List");
  };

  const recipeCards = recipes.map((recipe, index) => {
    return(
      <section className="cards--container">
        <RecipeCard
          title={recipe.attributes.title}
          id={index}
          key={Date.now()} //TODO put key and id in from BE - use Date.now
          image={recipe.attributes.image}
          handleAddToShoppingList={handleAddToShoppingList}
          shoppingListButtonText={shoppingListButtonText}
        />
      </section>
    )
  })
  return (
    <div>{recipeCards}</div>
  )
};

export default Recipes;