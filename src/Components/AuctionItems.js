import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function AuctionItems({type}){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://searchbff.tatacliq.com/products/mpl/search?searchText=%3Arelevance%3Acategory%3AMSH1234101%3AinStockFlag%3Atrue&isKeywordRedirect=true&isKeywordRedirectEnabled=false&channel=WEB&isMDE=true&isTextSearch=false&isFilter=false&qc=false&test=invizbff.ranking-inviz.ab&page=0&mcvid=70392446972208620931100437740791762303&customerId=&isSuggested=false&isPwa=true&pageSize=40&typeID=all');
                setData(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    const itemsPerPage = 6; 
    const products= data.searchresult;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = products && products.slice(indexOfFirstItem, indexOfLastItem);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const totalPages = Math.ceil(products.length / itemsPerPage);
    const redirectLogin=()=>{
        console.log('Roja', type);

    }

   return (
        <>
            <div className='card-container'>
            {data.searchresult && currentItems.map(item => (
                <div className='product-card' key={item.productId}>
                    <p className='product-brand'>{item.brandname}</p>
                    <img src={`${'https:' + item.imageURL}`} alt={item.productname} className="product-image" />
                    <h3 className='product-name'>{item.productname}</h3>
                    <p className='product-price'>Minimum Bid: {item.price.sellingPrice.formattedValue}</p>
                    <p className='product-price'>Current Bid: {item.price.mrpPrice.formattedValue}</p>
                    <button className='product-btn' onClick={redirectLogin} disabled={type===''}>Bid now</button>
                </div>
            ))}
            </div>
            <div className="pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => paginate(index + 1)}
                        className={currentPage === index + 1 ? 'active' : ''}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </>
    );
}

