import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import List from '../../Components/LIst/List';
import "./Products.scss"
const Products = () => {

    const param = useParams();
    const CategoryId = parseInt(param.id);
    const [maximumPrice, setMaximumPrice] = useState(5000);
    const [sort, setSort] = useState(null);

    return (
        <div className='products'>
            <div className="left">
                <div className="filterItem">
                    <h2>Product Categories</h2>
                    <div className="inputItem">
                        <input type="checkbox" name="" id="1" value={1} />
                        <label htmlFor="1">Mens</label>
                    </div>

                    <div className="inputItem">
                        <input type="checkbox" name="" id="2" value={2} />
                        <label htmlFor="2">Womens</label>
                    </div>

                    <div className="inputItem">
                        <input type="checkbox" name="" id="3" value={3} />
                        <label htmlFor="3">Kids</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" name="" id="4" value={4} />
                        <label htmlFor="1">Accessories</label>
                    </div>
                </div>




                <div className="filterItem">
                    <h2>Filter by Price</h2>
                    <div className="inputItem">
                        <span>0</span>
                        <input type="range" name="" id="" min={0} max={5000} onChange={(e) => setMaximumPrice(e.target.value)} />
                        <span>{maximumPrice}</span>
                    </div>
                </div>




                <div className="filterItem">
                    <h2>Sort by</h2>
                    <div className="inputItem">
                        <input type="radio" name="price" id="asc" value={"asc"} onChange={(e) => setSort("asc")} />
                        <label htmlFor="asc">Price(Lowest First) </label>
                    </div>
                    <div className="inputItem">
                        <input type="radio" name="price" id="desc" value={"desc"} onChange={(e) => setSort("desc")} />
                        <label htmlFor="desc">Price(Highest First) </label>
                    </div>
                </div>
            </div>



            <div className="right">
                <img src="https://images.pexels.com/photos/3839432/pexels-photo-3839432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='catImage' alt="" />
                <List categoryId={CategoryId} maximumPrice={maximumPrice} sort={sort} />
            </div>

        </div>
    );
}

export default Products;
