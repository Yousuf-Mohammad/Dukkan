import React, { useState, useEffect } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';
import axios from 'axios';
import "./Product.scss"
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';
const Product = () => {
    const id = useParams().id;
    const [selectedImage, setSelectedImage] = useState("img")
    const [quantity, setQuantity] = useState(1)
    const [data, setData] = useState([])
    const dispatch = useDispatch();

    const URL =
        `http://localhost:1337/api/products/${id}?populate=*`

    useEffect(() => {


        axios.get(URL)
            .then(response => {
                setData(response.data.data)
            })
            .catch(error => {
                console.log(error);
            });


    });

    console.log(id)
    return (
        <div>
            {<div className='product'>
                <div className="left">
                    <div className="images">
                        <img src={data?.attributes?.img?.data.attributes.url} alt="" onClick={e => setSelectedImage("img")} />
                        <img src={data?.attributes?.img1?.data.attributes.url} alt="" onClick={e => setSelectedImage("img1")} />
                    </div>
                    <div className="mainImg">
                        <img src={data?.attributes?.[selectedImage]?.data.attributes.url} alt="" />
                    </div>
                </div>
                <div className="right">
                    <h1>{data?.attributes?.title}</h1>
                    <span className='price'>{data?.attributes?.price}BDT</span>
                    <p>{data?.attributes?.desc}</p>
                    <div className="quantity">
                        <button onClick={() => setQuantity(prev => prev === 1 ? 1 : prev - 1)}>-</button>
                        {quantity}
                        <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
                    </div>

                    <button
                        className="add"
                        onClick={() =>
                            dispatch(
                                addToCart({
                                    id: data.id,
                                    title: data.attributes.title,
                                    desc: data.attributes.desc,
                                    price: data.attributes.price,
                                    img: data.attributes.img.data.attributes.url,
                                    quantity,
                                })
                            )
                        }
                    >
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
            </div>}

        </div>
    );
}

export default Product;
