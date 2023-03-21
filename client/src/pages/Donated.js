import React, { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";

export const Donated = () => {
  const [recipes, setRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);

  const userID = useGetUserID();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:3001/recipes");
        setRecipes(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/recipes/savedRecipes/ids/${userID}`
        );
        setSavedRecipes(response.data.savedRecipes);
      } catch (err) {
        console.log(err);
      }
    };

    fetchRecipes();
    fetchSavedRecipes();
  }, []);

  const saveRecipe = async (recipeID) => {
    try {
      const response = await axios.put("http://localhost:3001/recipes", {
        recipeID,
        userID,
      });
      setSavedRecipes(response.data.savedRecipes);
    } catch (err) {
      console.log(err);
    }
  };

  const isRecipeSaved = (id) => savedRecipes.includes(id);

    return (
      <div>
        <h1>Donated Food Available</h1>
        <ul>
         {
          recipes.map((recipe) => (
            <li key={recipe._id}>
              {recipe.name == "Maggi" || recipe.name == "Dosa" || recipe.name == "Chicken Butter Masala" || recipe.name == "Poha" ? (
                <div>
                  <h2>{recipe.name}</h2>
                  <div className="description">
                    <p>{recipe.description}</p>
                  </div>
                  <div className="instructions">
                    <p>{recipe.instructions}</p>
                  </div>
                  <img src={recipe.imageUrl} alt={recipe.name} />
                  <p>Quantity: {recipe.cookingTime}</p>
                </div>
              ) : (
                ""
              )}
            </li>
          ))
  }
        </ul>
      </div>
    );
};