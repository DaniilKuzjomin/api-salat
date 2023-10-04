import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './Products';
import Dishes from './Dishes';
import Header from './Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/dishes" element={<Dishes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
