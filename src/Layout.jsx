import React from 'react';
import { Link } from 'react-router-dom';
import './layout.css';

const Layout = () => {
    return (
        <div className="container">
            {/* Header Section */}
            <header>
                <h1>Welcome to Namma Udupi</h1>
                <p>Authentic South Indian Cuisine – A Taste of Tradition</p>
                <Link to="/home">
                    <button type="button" id="home-btn">Explore the Menu</button>
                </Link>
            </header>

            {/* Landing Page Section */}
            <div className="landingpage">
                <div className="overlay">
                    <h2>Experience the Flavors of South India</h2>
                </div>
            </div>
        </div>
    );
};

export default Layout;
