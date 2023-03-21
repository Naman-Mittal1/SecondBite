import React, { useState } from "react";
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserID";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import "./create-recipe.css"

export const CreateRecipe = () => {
  const userID = useGetUserID();
  const [cookies, _] = useCookies(["access_token"]);
  const [recipe, setRecipe] = useState({
    name: "",
    description: "",
    cookingTime: 0,
    instructions: "",
    ingredients: [],
    userOwner: userID,
    imageUrl: "", 
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleIngredientChange = (event, index) => {
    const { value } = event.target;
    const ingredients = [...recipe.ingredients];
    ingredients[index] = value;
    setRecipe({ ...recipe, ingredients });
  };

  const handleAddIngredient = () => {
    const ingredients = [...recipe.ingredients, ""];
    setRecipe({ ...recipe, ingredients });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(
        "http://localhost:3001/recipes",
        { ...recipe },
        {
          headers: { authorization: cookies.access_token },
        }
      );

      alert("Recipe Created");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="create-recipe">
      <h2>Add Food Item</h2>
      <form onSubmit={handleSubmit}>
       
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={recipe.name}
          onChange={handleChange}
        />
       
        <label htmlFor="description">Description & Contact: </label>
        <textarea rows="7" cols="40"
          id="description"
          name="description"
          type= "text"
          value={recipe.description}
          onChange={handleChange}
        ></textarea>

        <label htmlFor="cookingTime">Quantity: </label>
        <input
          type="number"
          id="cookingTime"
          name="cookingTime"
          value={recipe.cookingTime}
          onChange={handleChange}
        />
        
        
        <label htmlFor="instructions">Discounted Price:  </label>
        <textarea
          id="instructions"
          name="instructions"
          value={recipe.instructions}
          onChange={handleChange}
        ></textarea>
       
        

        <label htmlFor="ingredients">Targeted Audience: </label>
        {recipe.ingredients.map((ingredient, index) => (
          <input
            key={index}
            type="text"
            name="ingredients"
            value={ingredient}
            onChange={(event) => handleIngredientChange(event, index)}
          />
        ))}
        <button type="button" className="IngredientButton" onClick={handleAddIngredient}>
          Add consumer
        </button>

        <label htmlFor="imageUrl">Image URL: </label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={recipe.imageUrl}
          onChange={handleChange}
        />
        
        <button className="recipeSubmit" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateRecipe;