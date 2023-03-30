import React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import "./Cart.scss"
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeItem, resetCart } from '../../redux/cartReducer';
import { loadStripe } from "@stripe/stripe-js";
import axios from 'axios';

const Cart = () => {

    const products = useSelector(state => state.cart.products)
    const dispatch = useDispatch();
    const totalPrice = () => {
        let total = 0
        products.forEach((item) => (total += item.quantity * item.price));
        return total.toFixed(2);
    }

    const stripePromise = loadStripe('pk_test_51MqlTMHpBxxaPVWj98QJ7Mar6Sad2xTq3LBXerRRaWgDi8oaeAXtNrnJgk6ppAdbor6yVauoq17kbauJ2UzkYaDS00C8niaB4j');


    const handlePayment = async () => {
        try {
            const stripe = await stripePromise;
            const res = await axios.post("http://localhost:1337/api/orders", {
                products,
            });
            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id,
            });

        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='cart'>
            <h1>Product on your cart</h1>
            {products?.map(item => (
                <div className="item" key={item.id}>
                    <img src={item.img} alt="" />
                    <div className="details">
                        <h2>{item.title}</h2>
                        <div className="price">
                            {item.quantity} x  {item.price}TK
                        </div>
                    </div>
                    <DeleteOutlineIcon className='deleteIcon' onClick={() => dispatch(removeItem(item.id))} />
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>{totalPrice()}TK</span>
            </div>
            <button className="checkout" onClick={handlePayment}>PROCEED TO CHECKOUT</button>
            <span className='reset' onClick={() => dispatch(resetCart())} > RESET CART</span>
        </div>
    );
}

export default Cart;
