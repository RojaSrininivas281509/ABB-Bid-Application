import React from 'react';
import '../App.css'
import { AuctionEntryImg } from '../utility/common';
export default function AuctionEntry(){
    return(
        <div className='body-container'>
            <div>
               <p>Your Gateway to ExtraOrdinary Finds</p>
               <span>Unlock deals, bid smart, and seize the moment with our online bidding bonaza</span>
               <br/>
            </div>
            <div className='body-logo'>
                <img src={AuctionEntryImg}/>
            </div>
        </div>   
    )
}