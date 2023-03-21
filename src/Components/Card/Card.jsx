import React from 'react';
import { Link } from 'react-router-dom';
import "./Card.scss"

const Card = ({ item }) => {
    return (
        <Link className='link' to>
            <div className='card'>
                <div className="image">
                    {item?.attributes.isNew && <span>New Arrival</span>}
                    <img src={"http://localhost:1337" + item?.attributes.img.data.attributes.url} alt="" className="mainImg" />

                    <img src={"http://localhost:1337" + item.attributes.img1.data.attributes.url} alt="" className="secImg" />

                </div>
                <h2>{item?.attributes.title}</h2>
                <div className="prices">
                    {item?.attributes.oldPrice && <h3 className='oldPrice'>  {item?.attributes.oldPrice}BDT </h3>}
                    <h3 >{item?.attributes.price}BDT</h3>


                </div>
            </div>
        </Link>
    );
}

export default Card;
