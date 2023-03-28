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



            <div className="items">
                <img src="https://images.pexels.com/photos/3839432/pexels-photo-3839432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='catImage' alt="" />
                <List catId={CategoryId} maximumPrice={maximumPrice} sort={sort} SubCats={selectedSubCats} />
            </div>

        </div>
    );
}

export default Products;
