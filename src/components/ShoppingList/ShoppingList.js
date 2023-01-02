import React from "react";
import './ShoppingList.css'; 
//Function to map over ingredients

const ShoppingList = ({ingredients, id}) => {
  return (
    <div className="shopping-list" key={id}>
     {ingredients}
    </div>
  )
}

export default ShoppingList;