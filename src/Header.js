import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Header() {
  return (
    <header className="Header">
      <div className="button-container">
        <Link to="/products">
          <button className="button">Products</button>
        </Link>
        <Link to="/dishes">
          <button className="button">Dishes</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
