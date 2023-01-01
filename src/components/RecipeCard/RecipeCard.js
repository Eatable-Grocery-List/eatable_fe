import React from "react";
import './RecipeCard.css'; 

const RecipeCard = ({title}) => {
  return (
      //TODO add ID here as well as key
    // <div className="recipe-card" key={id}>
      <h2 className="card--title">{title}</h2>
      // {/* <img src={image} className="card-image"/> */}
    // </div>
  )
};

export default RecipeCard;