import React from 'react';
export default function ProductCards(data){
    const productData = data['data'];
    return(
        <div>
            {productData.map((item) => {
                console.log();
          
             <div className='card'>  <h1>{item.brandname}</h1></div>
            }

            )}
           
                

        </div>
    )


}