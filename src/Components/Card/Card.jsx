import React from 'react';
import { Link } from 'react-router-dom';
import "./Card.scss"

const Card = ({ item }) => {
    return (
        <Link className='link' to>
            <div className='card'>
                <div className="image">
                    {item.isNew && <span>New Arrival</span>}
                    <img src={item.img} alt="" className="mainImg" />
                    <img src={item.img1} alt="" className="secImg" />

                </div>
                <h2>{item.title}</h2>
                <div className="prices">
                    {item.oldPrice && <h3 className='oldPrice'>  {item.oldPrice}BDT </h3>}
                    <h3 >{item.price}BDT</h3>


                </div>
            </div>
        </Link>
    );
}

export default Card;
