import React, { useState, useEffect } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Home = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/item")
    .then((response) => response.json())
      .then((data) => setItem(data))
      .catch((err) => alert("Fetching failed: " + err.message)); // Fixing error handling
  }, []);

  return (
    <div className="home-container">
      <Navbar />

      {/* Checking if items exist before rendering */}
      <div className="item-list">
        {item.length > 0 ? (
          item.map((i) => (
            <div key={i.id} className="item-card" id={`item-${i.id}`}>
              <img src={i.image} alt={i.name} className="item-image" />
              <h1 className="item-name">{i.name}</h1>
              <p className="item-description">{i.description}</p>
              <h1 className="item-price">₹{i.price}</h1>
            </div>
          ))
        ) : (
          <p className="loading-text">Loading items or no data available...</p>
        )}
      </div>

     

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Cades Studec Technologies India Pvt.</p>
      </footer>
    </div>
  );
};

export default Home;
