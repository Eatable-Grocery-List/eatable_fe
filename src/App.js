import './App.css';
import React, {useState} from "react"
import Header from "./components/Header/Header";
import SearchForm from './components/SearchForm/SearchForm';
import Recipes from './components/Recipes/Recipes';
import ShoppingListButton from './components/ShoppingListButton/ShoppingListButton';
// // import { Route, Routes } from "react-router-dom";
// import ShoppingListPage from "./components/ShoppingListPage/ShoppingListPage"


function App() {
  const [recipes, setRecipes] = useState([]);
  const queryRecipes = (searchValue) => {
    const endpoint = `http://localhost:5000/api/v1/recipes?search=${searchValue}`;
    fetch(endpoint)
      .then(response => response.json())
      .then(data => setRecipes(data.data))
      // .catch(error => {
      //   // Handle any errors
      // }); //TODO handle this error
  }
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <div className="body">
        <ShoppingListButton />
        <SearchForm queryRecipes={queryRecipes} />
        <Recipes recipes={recipes} />
        </div>
      </header>
    </div>
  );
}

export default App;