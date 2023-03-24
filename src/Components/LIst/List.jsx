import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from "../Card/Card";
import { useParams } from 'react-router-dom';
import "./List.scss"

const List = (SubCats, maximumPrice, sort) => {
    const param = useParams();
    const CatId = parseInt(param.id);
    const [data, setData] = useState([])
    const URL =
        "http://localhost:1337/api/categories/" + `${CatId}` + "?populate[products][populate]=*";

    useEffect(() => {
        // fetch(URL)
        //     .then(res => res.json())
        //     .then(data => setData(data.data.attributes.products.data));

        axios.get(URL)
            .then(response => {
                setData(response.data.data.attributes.products.data)
            })
            .catch(error => {
                console.log(error);
            });
    });

    return (
        <div className='list'>
            {data?.map(item => (
                <Card item={item} key={item.id} />
            ))}
        </div>
    );
}

export default List;
