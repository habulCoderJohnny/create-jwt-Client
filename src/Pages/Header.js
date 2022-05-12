import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';


const Header = () => {
    return (
        <div>
        <nav className='header'>
            <Link to="/">Home</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/login">Login</Link>
            <Link to="/about">About</Link>
        </nav>
        </div>
    );
};

export default Header;