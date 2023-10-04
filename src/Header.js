import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Подключите файл App.css

function Header() {
  return (
    <header className="Header"> {/* Используйте класс Header */}
      <div className="button-container"> {/* Используйте класс button-container */}
        <Link to="/products">
          <button className="button">Products</button> {/* Используйте класс button */}
        </Link>
        <Link to="/dishes">
          <button className="button">Dishes</button> {/* Используйте класс button */}
        </Link>
      </div>
    </header>
  );
}

export default Header;
