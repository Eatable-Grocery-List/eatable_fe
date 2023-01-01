import React from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import './Recipes.css'

const Recipes = ({recipes}) => {
  const recipeCards = recipes.map((recipe, index) => {
    return(
      <section className="cards--container">
        <RecipeCard
          title={recipe.title}
          id={index}
          key={Date.now()} //TODO put key and id in from BE - use Date.now
          image={recipe.image}
        />
      </section>
    )
  })
  return (
    <div>{recipeCards}</div>
  )
};

export default Recipes;