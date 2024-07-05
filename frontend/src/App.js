import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Login from './components/Login';
import './styles/styles.css'; // Import the CSS file here

const App = () => (
  <Router>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  </Router>
);

export default App;
