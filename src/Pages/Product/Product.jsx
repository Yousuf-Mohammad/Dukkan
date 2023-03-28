import React, { useState, useEffect } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';
import axios from 'axios';
import "./Product.scss"
import { useParams } from 'react-router-dom';
const Product = () => {
    const id = useParams().id;
    const [selectedImage, setSelectedImage] = useState("img")
    const [quantity, setQuantity] = useState(1)
    const [data, setData] = useState([])

    const URL =
        `http://localhost:1337/api/products/${id}?populate=*`

    useEffect(() => {


        axios.get(URL)
            .then(response => {
                setData(response.data.data.attributes)
            })
            .catch(error => {
                console.log(error);
            });

        console.log(data)
    });
    const isLoading = data.length <= 10;

    return (
        <div className='product'>
            <div className="left">
                <div className="images">
                    <img src={"http://localhost:1337" + data?.img?.data.attributes.url} alt="" onClick={e => setSelectedImage("img")} />
                    <img src={"http://localhost:1337" + data?.img1?.data.attributes.url} alt="" onClick={e => setSelectedImage("img1")} />
                </div>
                <div className="mainImg">
                    <img src={"http://localhost:1337" + data?.[selectedImage]?.data.attributes.url} alt="" />
                </div>
            </div>
            <div className="right">
                <h1>{data.title}</h1>
                <span className='price'>{data.price}BDT</span>
                <p>{data.desc}</p>
                <div className="quantity">
                    <button onClick={() => setQuantity(prev => prev === 1 ? 1 : prev - 1)}>-</button>
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
