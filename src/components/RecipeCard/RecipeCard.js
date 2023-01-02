import React, {useState} from "react";
import './RecipeCard.css'; 

// const [createShoppingList] = useMutation(UPDATE_CART_QUANTITY, {
//   onCompleted: (data) => {
//     setShoppingList(data.createShoppingList);
//   },
// });

// const handleCreatingShoppingList = () => {
//   createShoppingList({ variables: { recipeName: title } });
// };


const RecipeCard = ({title, id, image}) => {
  // const [shoppingList, setShoppingList] = useState([]);
  // const queryRecipes = (searchValue) => {
  //   const endpoint = `http://localhost:5000/api/v1/recipes?search=${searchValue}`;
  //   fetch(endpoint)
  //     .then(response => response.json())
  //     .then(data => setRecipes(data.data))
      // .catch(error => {
      //   // Handle any errors
      // }); //TODO handle this error
  // console.log()
  return (
      //TODO add ID here as well as key
    <div className="recipe-card" key={id}>
      <p className="card--title">{title}</p>
       <img src={image} className="card-image"/>
       <button className="card--button" >Add to List</button> 
       {/* //onClick={() => handleCreatingShoppingList()} */}
    </div>
  )
};

export default RecipeCard;