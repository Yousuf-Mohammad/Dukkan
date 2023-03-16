import React, { useState } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';

import "./Product.scss"
const Product = () => {
    const [selectedImage, setSelectedImage] = useState(0)
    const [quantity, setQuantity] = useState(1)
    const images = [
        "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1561011/pexels-photo-1561011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ];
    return (
        <div className='product'>
            <div className="left">
                <div className="images">
                    <img src={images[0]} alt="" onClick={e => setSelectedImage(0)} />
                    <img src={images[1]} alt="" onClick={e => setSelectedImage(1)} />
                </div>
                <div className="mainImg">
                    <img src={images[selectedImage]} alt="" />
                </div>
            </div>
            <div className="right">
                <h1>Title</h1>
                <span className='price'>$890</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe fuga perspiciatis voluptate, consectetur dolore at odit cumque ipsam laborum doloremque quam aspernatur, fugit alias! Quibusdam esse aliquam inventore quo enim.</p>
                <div className="quantity">
                    <button onClick={() => setQuantity(prev => prev == 1 ? 1 : prev - 1)}>-</button>
                    {quantity}
                    <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
                </div>

                <button className="add">
                    <AddShoppingCartIcon /> ADD TO CART
                </button>
                <div className="link">
                    <div className="item">
                        <FavoriteBorderIcon /> ADD TO WISHLIST
                    </div>
                    <div className="item">
                        <BalanceOutlinedIcon /> ADD TO COMPARE
                    </div>
                </div>
                <div className="details">
                    <span>Vendor: Polo</span>
                    <span>Product Type: T-Shirt</span>
                    <span>Tag: T-Shirt, Men, Top</span>
                </div>


            </div>
        </div>
    );
}

export default Product;
