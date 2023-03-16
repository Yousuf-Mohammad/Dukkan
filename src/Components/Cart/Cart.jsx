import React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import "./Cart.scss"

const Cart = () => {
    const data = [{
        id: 1,
        img: "https://images.pexels.com/photos/1018911/pexels-photo-1018911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        img1: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Casual T- Shirt",
        desc: "lorem30",
        isNew: true,
        oldPrice: 500,
        price: 350

    },
    {

        id: 2,
        img: "https://images.pexels.com/photos/1450114/pexels-photo-1450114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        img1: "https://images.pexels.com/photos/3178767/pexels-photo-3178767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        title: "Formal Coat",
        desc: 'lorem30',
        isNew: false,
        oldPrice: 5500,
        price: 2350

    }]
    return (
        <div className='cart'>
            <h1>Product on your cart</h1>
            {data?.map(item => (
                <div className="item" key={item.id}>
                    <img src={item.img} alt="" />
                    <div className="details">
                        <h2>{item.title}</h2>
                        <p>{item.desc?.substring(0, 100)}</p>
                        <div className="price">
                            1 x  {item.price}TK
                        </div>
                    </div>
                    <DeleteOutlineIcon className='deleteIcon' />
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>500TK</span>
            </div>
            <button className="checkout">PROCEED TO CHECKOUT</button>
            <span className='reset'> RESET CART</span>
        </div>
    );
}

export default Cart;
