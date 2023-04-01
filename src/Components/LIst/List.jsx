import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from "../Card/Card";
import "./List.scss"

const List = ({ catId }) => {

    const [data, setData] = useState([])

    const URL =
        `https://dukkan.onrender.com/api/categories/${catId}?populate[products][populate]=*`;

    useEffect(() => {


        axios.get(URL)

            .then(response => {

                setData(response.data.data.attributes.products.data)
            })
            .catch(error => {
                console.log(error);
            });


    },);
    const isLoading = data?.length >= 4


    return (
        <div className='list'>
            {!isLoading ? <img src="https://cdn.dribbble.com/users/1641/screenshots/1632371/loading.gif" alt="" /> :

                data?.map(item => (
                    <Card item={item} key={item.id} />
                ))
            }
        </div>
    );
}

export default List;
