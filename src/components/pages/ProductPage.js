import React from 'react'
import classes from './ProductPage.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';

export default function ProductPage() {

    const params = useParams();
    console.log(params);
    let id = params.productId;

    const [dataObj, setData] = useState({});

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                setData(data);
            });
    }, [])

    if (Object.keys(dataObj).length === 0) {
        return null;
    }
    return (
        
        <div className={classes.product}>

            <div className={classes.imgDiv}>
                <img alt="product" className={classes.img} src={dataObj.images[0]} />
            </div>

            <div className={classes.card}>
                <div className={classes.proName}>{dataObj.title}</div>
                <div className={classes.proRating}>Rating : {dataObj.rating}/5</div>

                <div className={classes.proPriceContainer}>
                    <div className={classes.proPrice}> <div className={classes.dollar}>$</div>{dataObj.price}</div>
                    {/* <s className={classes.actualPrice}>${actualPrice}</s> */}
                    <div className={classes.discount}>( {dataObj.discountPercentage}% off)</div>
                </div>

                {/* <div className={classes.delivery}>{toShow}</div> */}
            </div>



        </div>
    )
}
