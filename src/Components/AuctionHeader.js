import React from 'react'
export default function Header(){
    return(
        <div className="header">
            <div className="logo-container">
               <img className="logo" src="https://www.shutterstock.com/image-vector/auction-logo-initial-letter-design-260nw-1901724895.jpg" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Auctions</li>
                    <li>Biding</li>
                    <li>About Us</li>
                    <li>English</li>
                    <li>Login</li>
                    <li>Get Started</li>
                </ul>
            </div>
        </div> 
    )

}