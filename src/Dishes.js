import React, { useState, useEffect } from 'react';
import './App.css';

function Dishes() {
  const [dishData, setDishData] = useState({
    name: '',
    description: '',
    recipe: '',
    selectedIngredient: '',
    selectedIngredientGrams: '',
    ingredients: [],
  });

  const [availableIngredients, setAvailableIngredients] = useState([]);
  const [dishIngredients, setDishIngredients] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7122/Product")
      .then((res) => res.json())
      .then((data) => setAvailableIngredients(data))
      .catch((error) => console.error("Error fetching ingredients:", error));

    fetch("https://localhost:7122/DishIngredient")
      .then((res) => res.json())
      .then((data) => setDishIngredients(data))
      .catch((error) => console.error("Error fetching dish ingredients:", error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDishData({ ...dishData, [name]: value });
  };

  const handleAddIngredient = () => {
    if (dishData.selectedIngredient) {
      const newIngredient = `${dishData.selectedIngredient} (${dishData.selectedIngredientGrams}g)`;

      const isIngredientSelected = dishData.ingredients.some((ingredient) =>
        ingredient.startsWith(dishData.selectedIngredient)
      );

      if (!isIngredientSelected) {
        setDishData({
          ...dishData,
          ingredients: [...dishData.ingredients, newIngredient],
          selectedIngredient: '',
          selectedIngredientGrams: '',
        });
      }
    }
  };

  const handleRemoveIngredient = (index) => {
    const updatedIngredients = [...dishData.ingredients];
    updatedIngredients.splice(index, 1);
    setDishData({ ...dishData, ingredients: updatedIngredients });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://localhost:7122/Dish/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dishData),
    })
      .then((res) => res.json())
      .then((data) => {
        const newDishId = data.id;

        const newDishIngredients = dishData.ingredients.map((ingredient) => ({
          dishId: newDishId,
          productQuantity: ingredient,
        }));
        

        fetch("https://localhost:7122/DishIngridient/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newDishIngredients),
        })
          .then((res) => res.json())
          .then(() => {
            // Очистка полей после успешного добавления
            setDishData({
              name: '',
              description: '',
              recipe: '',
              selectedIngredient: '',
              selectedIngredientGrams: '',
              ingredients: [],
            });

            fetch("https://localhost:7122/DishIngridient")
              .then((res) => res.json())
              .then((data) => setDishIngredients(data))
              .catch((error) => console.error("Error fetching dish ingredients:", error));
          })
          .catch((error) => console.error("Error adding dish ingredients:", error));
      })
      .catch((error) => console.error("Error adding dish:", error));
  };

  return (
    <div className="Dishes">
      <h2>Dishes Page</h2>
      <h3>Here you can share your recipes with other people!</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <br />
          <input
            type="text"
            placeholder="Write here your dish name..."
            name="name"
            value={dishData.name}
            onChange={handleInputChange}
          />
        </div>
        <br />
        <div>
          <label>Description:</label>
          <br />
          <textarea
            name="description"
            placeholder="Write here your dish description"
            value={dishData.description}
            onChange={handleInputChange}
          />
        </div>
        <br />
        <div>
          <label>Recipe:</label>
          <br />
          <textarea
            name="recipe"
            placeholder="Write your dish recipe here..."
            value={dishData.recipe}
            onChange={handleInputChange}
          />
        </div>
        <br />
        <div>
          <label>Ingredients:</label>
          <br />
          <br />
          <select
            value={dishData.selectedIngredient}
            onChange={(e) => setDishData({ ...dishData, selectedIngredient: e.target.value })}
          >
            <option value="">Select an ingredient</option>
            {availableIngredients.map((ingredient) => (
              <option key={ingredient.id} value={ingredient.name}>
                {ingredient.name}
              </option>
            ))}
          </select>
          <br />
          <input
            type="text"
            placeholder="Write here how much grams of product needs..."
            value={dishData.selectedIngredientGrams}
            onChange={(e) => setDishData({ ...dishData, selectedIngredientGrams: e.target.value })}
          />
          <br />
          <button
            type="button"
            className="add-ingredient-button"
            onClick={handleAddIngredient}
            disabled={dishData.ingredients.some((added) => added.startsWith(dishData.selectedIngredient))}
          >
            Add Ingredient
          </button>
          <br />
          <h2>Added ingredients:</h2>
          <ul>
            {dishData.ingredients.map((ingredient, index) => (
              <li key={index}>
                {ingredient}
                <button
                  type="button"
                  className="remove-ingredient-button"
                  onClick={() => handleRemoveIngredient(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
        <button type="submit" className="submit-button">
          Add Dish
        </button>
      </form>

      <h2>Dishes and Ingredients</h2>
      <div className="dishes-list">
        {dishIngredients.map((dishingredient, index) => (
          <div key={index} className="dishingredient-item">
            <h3>Dish: {dishingredient.dishName}</h3>
            <p>Description: {dishingredient.dishDescription}</p>
            <p>Ingredients:</p>
            <ul>
              {dishingredient.ingredients.map((ingredient, i) => (
                <li key={i}>{ingredient}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dishes;
