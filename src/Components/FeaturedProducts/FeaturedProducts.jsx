import React, { useEffect, useState } from 'react';

import Card from '../Card/Card';

import "./FeaturedProducts.scss"

const FeaturedProducts = ({ type }) => {
    const [product, setProduct] = useState([]);

    const URL =
        `https://dukkan.onrender.com/api/products?populate=*&[filters][type][$eq]=${type}`;

    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(data => setProduct(data.data));
    });

    const isLoading = product?.length >= 4
    console.log(isLoading)

    return (

        < div className='featuredProducts' >

            < div className="top" >
                <h1>{type} products</h1>
                <p>Rubick's the cloth brand is currently featuring trending products that combine quality and style, ensuring that customers stay ahead of the fashion game while experiencing ultimate comfort.</p>
            </div >

            <div className="bottom">
                {!isLoading ? <img className='loadingGif' src="https://cdn.dribbble.com/users/1641/screenshots/1632371/loading.gif" alt="" /> :
                    product.map(item => (
                        <Card item={item} key={item.id} />
                    ))}

            </div>

        </div >
    );
}

export default FeaturedProducts;
