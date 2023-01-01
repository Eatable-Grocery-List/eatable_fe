import React, { useState } from "react";
import './SearchForm.css';

// export const queryRecipes = (searchValue) => {
//   const endpoint = `http://localhost:5000/api/v1/recipes?search=${searchValue}`;
//   fetch(endpoint)
//     .then(response => response.json())
//     .then(data => data.data)
//     .then(recipe => recipe.map(recipe => console.log(recipe.attributes)))
//     // .catch(error => {
//     //   // Handle any errors
//     // }); //TODO handle this error
// }


const SearchForm = ({ queryRecipes }) => {
  const [searchValue, setSearchValue] = useState("");
  const [domError, setDomError] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchValue) {
      queryRecipes(searchValue);
      clearInputs();
    } else {
      setDomError("Please enter a word");
    }
  };

  const clearInputs = () => {
    setSearchValue("");
    setDomError("");
  };

  return (
    <div>
      <h3>Find A Recipe:</h3>
      <input
        type="text"
        placeholder="Search for a Recipe"
        name="recipe"
        className="search-input"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button className="recipe-search-btn" onClick={(event) => handleSubmit(event)}>Search</button>
      {domError && <h4 className="error-message">{domError}</h4>}
    </div>
  );
};

export default SearchForm;