import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Bid(){
    const location=useLocation();
    console.log(location.state);
    return(
        <div>
            <h1>Welcome to Biding Page !!!</h1>

        </div>
    )
}