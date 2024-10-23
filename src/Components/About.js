import React from 'react';
import '../utility/about.css';
import { AboutImg } from '../utility/common';
export default function About(){
    return (
        <div className="row">
            <div className="col-md-6">
            <div className="about-content p-2">
            <h2>Welcome to eAuctionsindia.com...</h2>

            <p className='param-1'>eAuctionsIndia.com is India's leading online advertisement portal for e-auctions, providing comprehensive access to bank property auctions across the country. This platform consolidates information on e-auction properties from over 80 public and private sector banks, NCLT, and various financial institutions.</p>

            <p className='param-1'>It offers a one-stop destination for buyers and investors to discover a wide range of non-performing and stressed assets. The listings include residential properties such as flats, independent houses, and open plots, as well as commercial properties, industrial land and buildings, shops, vehicles, plant and machinery, agricultural and non-agricultural land, and even gold auctions.</p>

            <p className='param-1'>By gathering all these details in one place, eAuctionsIndia simplifies the process of finding and participating in property e-auctions, making it easier for buyers and investors to identify valuable opportunities.</p>

            <p>&nbsp;</p>
            </div>
            </div>

            <div className="col-md-6">
            <div className="about-image"><img alt="About Us" src={AboutImg}/></div>
            </div>
        </div>
    )
}