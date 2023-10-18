import React, { useState } from 'react';
import './App.css';

function Dishes() {
  const [dishData, setDishData] = useState({
    name: '',
    description: '',
    recipe: '',
    ingredients: [''], // Начальное поле для ингредиентов
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDishData({ ...dishData, [name]: value });
  };

  const handleAddIngredient = () => {
    setDishData({ ...dishData, ingredients: [...dishData.ingredients, ''] });
  };

  const handleIngredientChange = (index, value) => {
    const updatedIngredients = [...dishData.ingredients];
    updatedIngredients[index] = value;
    setDishData({ ...dishData, ingredients: updatedIngredients });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь вы можете отправить данные о блюде на сервер или выполнить другие действия
    // Например, вы можете использовать dishData для отправки данных о блюде
  };

  return (
    <div className="Dishes">
      <h2>Dishes Page</h2>
      <h3>Here you can share your recipes with other people!</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <br></br>
          <input
            type="text"
            placeholder='Write here your dish name...'
            name="name"
            value={dishData.name}
            onChange={handleInputChange}
          />
        </div>
        <br></br>
        <div>
          <label>Description:</label>
          <br></br>
          <textarea
            name="description"
            placeholder='Write here your dish description'
            value={dishData.description}
            onChange={handleInputChange}
          />
        </div>
        <br></br>
        <div>
          <label>Recipe:</label>
          <br></br>
          <textarea
            name="recipe"
            placeholder='Write your dish recipe here...'
            value={dishData.recipe}
            onChange={handleInputChange}
          />
        </div>
        <br></br>
        <div>
          <label>Ingredients:</label>
          {dishData.ingredients.map((ingredient, index) => (
            <div key={index}>
              <input
                type="text"
                placeholder='Write here your dish ingridient...'
                value={ingredient}
                onChange={(e) => handleIngredientChange(index, e.target.value)}
              />
            </div>
          ))}
          <button type="button" className="add-ingredient-button" onClick={handleAddIngredient}>
            Add Ingredient
          </button>
          <button type="submit" className="submit-button">Add Dish</button>
          <br></br>
          <h2>Added dishes and their recipes:</h2>
          <br></br>
          <br></br>
        </div>
      </form>
    </div>
  );
}

export default Dishes;
