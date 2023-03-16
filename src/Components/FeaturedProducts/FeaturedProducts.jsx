import React from 'react';
import Card from '../Card/Card';
import "./FeaturedProducts.scss"

const FeaturedProducts = ({ type }) => {

    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/1018911/pexels-photo-1018911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img1: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Casual T- Shirt",
            isNew: true,
            oldPrice: 500,
            price: 350

        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/1450114/pexels-photo-1450114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img1: "https://images.pexels.com/photos/3178767/pexels-photo-3178767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

            title: "Formal Coat",
            isNew: false,
            oldPrice: 5500,
            price: 2350

        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/977796/pexels-photo-977796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img1: "https://images.pexels.com/photos/826380/pexels-photo-826380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Leather jacket",
            isNew: false,

            price: 4350

        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/3345882/pexels-photo-3345882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

            title: "Full sleeve T-Shirt",
            isNew: true,

            price: 450

        }
    ]

    return (
        <div className='featuredProducts'>
            <div className="top">
                <h1>{type} products</h1>
                <p>Rubick's the cloth brand is currently featuring trending products that combine quality and style, ensuring that customers stay ahead of the fashion game while experiencing ultimate comfort.</p>
            </div>

            <div className="bottom">
                {data.map(item => (
                    <Card item={item} key={item.id} />
                ))}
            </div>

        </div>
    );
}

export default FeaturedProducts;
