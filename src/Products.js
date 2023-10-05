import React from 'react';
import './App.css';

function Products() {
  return (
    <div className="Products">
      <h5>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h5>
      <h2>Products Page</h2>
      <h3>Write product information per 100g of product</h3>
      <div>
        <label>Name:</label>
        <input type="text" id="name" />
      </div>
      <div>
        <label>Carbs:</label>
        <input type="text" id="carbs" />
      </div>
      <div>
        <label>Protein:</label>
        <input type="text" id="protein" />
      </div>
      <div>
        <label>Fats:</label>
        <input type="text" id="fats" />
      </div>
      <div>
        <label>Sugar:</label>
        <input type="text" id="sugar" />
      </div>
      <div>
        <label>Salt:</label>
        <input type="text" id="salt" />
      </div>
      <button>Add Product</button>
    </div>
  );
}

export default Products;
