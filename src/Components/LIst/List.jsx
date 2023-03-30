import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from "../Card/Card";
import { useParams } from 'react-router-dom';
import "./List.scss"

const List = (SubCats, maximumPrice, sort) => {
    const param = useParams();
    const CatId = parseInt(param.id);
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const URL =
        `https://dukkan.onrender.com/api/categories/${CatId}?populate[products][populate]=*`;

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            axios.get(URL)
                .then(response => {
                    setData(response.data.data.attributes.products.data)
                })
                .catch(error => {
                    console.log(error);
                });
        }, 300)
        setLoading(false)
    },);


    return (
        <div className='list'>
            {loading ? <img src="https://cdn.dribbble.com/users/1641/screenshots/1632371/loading.gif" alt="" /> :

                data?.map(item => (
                    <Card item={item} key={item.id} />
                ))
            }
        </div>
    );
}

export default List;
