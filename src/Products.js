import React, { useEffect, useRef, useState } from 'react';
import './App.css';

function Products() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const nameRef = useRef();
  const carbsRef = useRef();
  const proteinRef = useRef();
  const fatsRef = useRef();
  const sugarRef = useRef();
  const saltRef = useRef();

  useEffect(() => {
    fetch("https://localhost:7122/product")
      .then(res => res.json())
      .then(json => setProducts(json));
  }, []);

  function PostProduct() {
    const newProduct = {
      "name": nameRef.current.value,
      "carbs": Number(carbsRef.current.value),
      "protein": Number(proteinRef.current.value),
      "fats": Number(fatsRef.current.value),
      "sugar": Number(sugarRef.current.value),
      "salt": Number(saltRef.current.value)
    };

    fetch("https://localhost:7122/product/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newProduct)
    })
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .catch((error) => console.error("Error adding product:", error));

    // Очистить input поля
    nameRef.current.value = '';
    carbsRef.current.value = '';
    proteinRef.current.value = '';
    fatsRef.current.value = '';
    sugarRef.current.value = '';
    saltRef.current.value = '';
  }

  return (
    <div className="Products">
      <h2>Products Page</h2>
      <h3>Write product information per 100g of product</h3>
      <div>
        <label>Name:</label>
        <input ref={nameRef} placeholder='Write ingredient name here...' type="text" id="name" />
      </div>
      <div>
        <label>Carbs:</label>
        <input ref={carbsRef} placeholder='Write how much carbs in ingredient per 100g...' type="text" id="carbs" />
      </div>
      <div>
        <label>Protein:</label>
        <input ref={proteinRef} placeholder='Write how much proteins in ingredient per 100g...' type="text" id="protein" />
      </div>
      <div>
        <label>Fats:</label>
        <input ref={fatsRef} placeholder='Write how much fats in ingredient per 100g...' type="text" id="fats" />
      </div>
      <div>
        <label>Sugar:</label>
        <input ref={sugarRef} placeholder='Write how much sugar in ingredient per 100g...' type="text" id="sugar" />
      </div>
      <div>
        <label>Salt:</label>
        <input ref={saltRef} placeholder='Write how much salt in ingredient per 100g...' type="text" id="salt" />
      </div>
      <button onClick={() => PostProduct()}>Add Product</button>

      <h2>Table with added products and their information:</h2>
      <div className="search-container">
        <input
          type="text"
          id="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
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
        {products
          .filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((product) => (
            <tbody key={product.id}>
              <td>{product.name}</td>
              <td>{product.carbs}g</td>
              <td>{product.protein}g</td>
              <td>{product.fats}g</td>
              <td>{product.sugar}g</td>
              <td>{product.salt}g</td>
            </tbody>
          ))}
      </table>
    </div>
  );
}

export default Products;
