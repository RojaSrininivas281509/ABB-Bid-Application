import React from 'react';
import '../App.css';

const Footer = () => {
    return (
        <footer className="footer">
            <nav>
                <ul>
                    <li><a href="/">Privacy Policy</a></li>
                    <li><a href="/">Terms of Service</a></li>
                    <li><a href="/">Contact Us</a></li>
                </ul>
            </nav>
            <p style={{'font-size':'30px', 'margin-right':'20px'}}>&copy; {new Date().getFullYear()} Auction Site. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
