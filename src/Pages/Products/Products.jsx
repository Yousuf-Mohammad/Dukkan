import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import List from '../../Components/LIst/List';
import "./Products.scss"
const Products = () => {

    const param = useParams();
    const CategoryId = parseInt(param.id);

    const [maximumPrice, setMaximumPrice] = useState(5000);
    const [sort, setSort] = useState(null);

    const [data, setData] = useState(null);
    const [selectedSubCats, setSelectedSubCats] = useState([]);

    const handleChange = (e) => {
        const value = e.target.value;
        const isChecked = e.target.checked;

        setSelectedSubCats(isChecked ? [...selectedSubCats, value] : selectedSubCats.filter(item => item !== value));
    }
    console.log(selectedSubCats)

    const URL =
        "http://localhost:1337/api/sub-categories?populate=*&%5Bfilters%5D%5Bcategories%5D%5Bid%5D%5B$eq%5D=" + `${CategoryId}`;

    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(data => setData(data.data));
    });


    return (
        <div className='products'>

            <div className="left">
                <div className="filterItem">
                    <h2>Product Categories</h2>
                    {data?.map((item) => (
                        <div className="inputItem" key={item.id}>
                            <input type="checkbox" name="" id={item.id} value={item.id} onChange={handleChange} />
                            <label htmlFor={item.id}>{item.attributes.title}</label>
                        </div>
                    ))}




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
                <List catId={CategoryId} maximumPrice={maximumPrice} sort={sort} SubCats={selectedSubCats} />
            </div>

        </div>
    );
}

export default Products;
