import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Recipe.css";

const Recipe = () => {
  const [recipeDetails, setRecipeDetails] = useState({});
  const [activeTab, setActiveTab] = useState("ingredients");

  let params = useParams();

  const getRecipe = async () => {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?number=2&apiKey=8e6e8a67bccb4d3b978a39d440bdf3c0`
    );
    const data = await res.json();
    console.log(data);
    setRecipeDetails(data);
  };

  useEffect(() => {
    getRecipe();
    console.log();
  }, [params.name]);

  return (
    <div >
      <div className="title">
      <h2>{recipeDetails.title}</h2>
      <img src={recipeDetails.image} />
      </div>
      <div>
        <button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Intructions
        </button>
        <button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </button>
      </div>
      {activeTab === "instructions" && (
        <div>
          <p dangerouslySetInnerHTML={{ __html: recipeDetails.summary }}></p>
          <p
            dangerouslySetInnerHTML={{ __html: recipeDetails.instructions }}
          ></p>
        </div>
      )}

      {activeTab === "ingredients" && (
      
          <ul>
            {recipeDetails.extendedIngredients?.map((ingre) => (
              <li key={ingre.id}>{ingre.original}</li>
))}
          </ul>
        
      
      )}
    </div>
  );
};

export default Recipe;
