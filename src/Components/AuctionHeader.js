import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src="https://www.shutterstock.com/image-vector/auction-logo-initial-letter-design-260nw-1901724895.jpg"
                    alt="Logo"
                />
            </div>
            <div className="nav-items">
                <nav className="navbar">
                    <ul>
                       <li><NavLink to='/home' activeClassName="active">Home</NavLink></li>
                        <li><NavLink to='/auctions' activeClassName="active">Auctions</NavLink></li>
                        <li><NavLink to='/biding' activeClassName="active">Bidding</NavLink></li>
                        <li><NavLink to='/about' activeClassName="active">About Us</NavLink></li>
                        <li>English</li>
                        <li><NavLink to='/login' activeClassName="active">Login</NavLink></li>
                        <li><NavLink to='/register' activeClassName="active">Get Started</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;
