import React from 'react';
import { Link } from 'react-router-dom';
import  './navbar.css';

const Navbar = () => {
    return (
        <div>
   
   <nav className="navbar">
    <ul className="nav-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/admin">Admin</Link></li>
        {/* <li><Link to="/postItems">PostItems</Link></li> */}
    </ul>
</nav>


           
        </div>
    );
};

export default Navbar;