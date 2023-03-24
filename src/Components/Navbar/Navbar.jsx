import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.scss"

//import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Cart from '../Cart/Cart';


const Navbar = () => {

    const [open, setOpen] = useState(false)
    return (
        <div className='navbar'>
            <div className='wrapper'>
                <div className='left'>
                    <div className="item">
                        <Link className='link' to="/products/1"> Men</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/2"> Women</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/3"> Children</Link>
                    </div>


                </div>
                <div className='center'>
                    <Link className='link' to="/"><img src="/images/rubiks-cube-29397.png" width='150px' alt="" /></Link>
                </div>

                <div className="right">
                    <div className='item'>
                        <Link className='link' to="/">Homepage</Link>
                    </div>
                    <div className='item'>
                        <Link className='link' to="/">About</Link>
                    </div>
                    <div className='item'>
                        <Link className='link' to="/">Contact</Link>
                    </div>
                    <div className='item'>
                        <Link className='link' to="/">Stores</Link>
                    </div>
                    <div className="icon">
                        <SearchIcon />
                        <PersonOutlineIcon />
                        <FavoriteBorderIcon />
                        <div className="cartIcon" onClick={() => setOpen(!open)}>
                            <ShoppingCartOutlinedIcon />
                            <span>0</span>
                        </div>
                    </div>
                </div>


            </div>
            {open && <Cart />}
        </div>

    );
}

export default Navbar;
