import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Cuisine.css";

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);

  let params = useParams();

  const getCuisine = async () => {
    const res = await fetch(
      ` https://api.spoonacular.com/recipes/complexSearch?apiKey=8e6e8a67bccb4d3b978a39d440bdf3c0&number=2&cuisine=${params.type}`
    );
    const data = await res.json();
    console.log(data.results);
    setCuisine(data.results);
  };

  useEffect(() => {
    getCuisine(params.type);
    console.log(params.type);
  }, [params.type]);

  return (
    <div>
      <div className="container">
        {cuisine.map((recipe) => {
          return (
            <Link to={"/recipe/" + recipe.id}>
              <div key={recipe.id} className="card">
                <h4>{recipe.title}</h4>
                <img src={recipe.image} alt="" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Cuisine;
