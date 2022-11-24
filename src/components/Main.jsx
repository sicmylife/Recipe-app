import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Main.css";


const Main = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("pizza");

  const getRecipes = async () => {
    const res = await fetch(
      ` https://api.spoonacular.com/recipes/complexSearch?apiKey=8e6e8a67bccb4d3b978a39d440bdf3c0&number=8&query=${query}`
    );
    const data = await res.json();
    console.log(data.results);
    setRecipes(data.results);
  };

  // useEffect(() => {
  //   getRecipes();
  // }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div>
        <form className="search-form" onSubmit={getSearch}>
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
          placeholder='Find recipe'
        />
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>

      <div className="grid">
        {recipes.map((recipe) => {
          return (
            <div key={recipe.id} className="card">
              <Link to={"/recipe/" + recipe.id}>
                <h4>{recipe.title}</h4>
                <img src={recipe.image} alt="" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
