import React from 'react'
import classes from './ProductPage.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';

export default function ProductPage() {

    const params = useParams();
    console.log(params);
    let id = params.productId;

    const [dataObj, setData] = useState({});

    let toShow = "FREE Delivery over order of $25.";

    let actualPrice = dataObj.price/((100 - dataObj.discountPercentage)/100);
	actualPrice = (Math.round(actualPrice * 100) / 100).toFixed(2);

    if(dataObj.price > 25)
		toShow = "FREE Delivery by Phoenix"



    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                setData(data);
            });
    },[])

    if (Object.keys(dataObj).length === 0) {
        return null;
    }
    return (
        
        <div className={classes.product}>

            <div className={classes.imgDiv}>
                <img alt="product" className={classes.img} src={dataObj.images[0]} />
            </div>

            <div className={classes.card}>
                <div className={classes.nameDiv}>
                    <div className={classes.proName}>{dataObj.title}</div>
                    <div className={classes.proRating}>Rating : {dataObj.rating}/5</div>
                </div>


                <div className={classes.proPriceContainer}>
                    <div className={classes.proPrice}> <div className={classes.dollar}>$</div>{dataObj.price}</div>
                    <s className={classes.actualPrice}>${actualPrice}</s>
                    <div className={classes.discount}>( {dataObj.discountPercentage}% off)</div>
                </div>

                <div className={classes.delivery}>{toShow}</div>

                {/* <div className={classes.wishlist}>Add to wishlist</div>
                <div className={classes.cart}>Add to cart</div> */}

            </div>



        </div>
    )
}
