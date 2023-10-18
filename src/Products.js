import React from 'react';
import './App.css';

function Products() {
  return (
    <div className="Products">
      <h2>Products Page</h2>
      <h3>Write product information per 100g of product</h3>
      <div>
        <label>Name:</label>
        <input placeholder='Write ingridient name here...' type="text" id="name" />
      </div>
      <div>
        <label>Carbs:</label>
        <input placeholder='Write how much carbs in ingridient per 100g...' type="text" id="carbs" />
      </div>
      <div>
        <label>Protein:</label>
        <input placeholder='Write how much proteins in ingridient per 100g...' type="text" id="protein" />
      </div>
      <div>
        <label>Fats:</label>
        <input placeholder='Write how much fats in ingridient per 100g...' type="text" id="fats" />
      </div>
      <div>
        <label>Sugar:</label>
        <input placeholder='Write how much sugar in ingridient per 100g...' type="text" id="sugar" />
      </div>
      <div>
        <label>Salt:</label>
        <input placeholder='Write how much salt in ingridient per 100g...' type="text" id="salt" />
      </div>
      <button>Add Product</button>
      
      <h2>Table with added products and their information:</h2>
      <div className="search-container">
        <input type="text" id="search" placeholder="Search..."/>
        <button id="search-button">Search</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Carbs</th>
            <th>Protein</th>
            <th>Fats</th>
            <th>Sugar</th>
            <th>Salt</th>
          </tr>
        </thead>
        <tbody>
          <td>Test</td>
          <td>Test</td>
          <td>Test</td>
          <td>Test</td>
          <td>Test</td>
          <td>Test</td> 
        </tbody>
      </table>
    </div>
  );  
}

export default Products;
