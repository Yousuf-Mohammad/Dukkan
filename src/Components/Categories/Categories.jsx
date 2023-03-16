import React from 'react';
import { Link } from 'react-router-dom';
import "./Categories.scss";

const Categories = () => {
    return (
        <div className='categories'>
            <div className="col">
                <div className="row item"><img src="https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <button><Link className='link' to="/product/1">SALE !</Link></button></div>
                <div className="row item"><img src="https://images.pexels.com/photos/8995842/pexels-photo-8995842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <button><Link className='link' to="/product/1">WOMEN</Link></button></div>
            </div>
            <div className="col">
                <div className="row item"><img src="https://images.pexels.com/photos/4940756/pexels-photo-4940756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <button><Link className='link' to="/product/1">NEW ARRIVAL</Link></button></div>
            </div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row item">
                            <img src="https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            <button><Link className='link' to="/product/1">MEN</Link></button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row item">
                            <img src="https://images.pexels.com/photos/6003052/pexels-photo-6003052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            <button><Link className='link' to="/product/1">ACCESSORIES</Link></button>
                        </div>
                    </div>
                </div>
                <div className="row item"><img src="https://images.pexels.com/photos/5560471/pexels-photo-5560471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <button><Link className='link' to="/product/1">KIDS</Link></button></div>
            </div>
        </div>
    );
}

export default Categories;
