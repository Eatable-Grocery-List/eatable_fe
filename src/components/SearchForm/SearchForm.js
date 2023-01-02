import React, { useState } from "react";
import './SearchForm.css';

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
    <div className="search-area">
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