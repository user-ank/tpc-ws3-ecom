import React from 'react'
import classes from './ProductInCart.module.css'

export default function ProductInCart(props) {

	let toShow = "FREE Delivery over order of $25.";
	let actualPrice = props.proPrice/((100 - props.discount)/100);

	actualPrice = (Math.round(actualPrice * 100) / 100).toFixed(2);

	if(props.proPrice > 25)
		toShow = "FREE Delivery by Phoenix"
	return (
		<div key={props.id} className={classes.product}>

			<div className={classes.imgDiv}>
				<img alt="product" className={classes.img} src={props.image} />
			</div>

			<div className={classes.card}>
				<div className={classes.proName}>{props.proName}</div>
				<div className={classes.proRating}>Rating : {props.proRating}/5</div>
				
				<div className={classes.proPriceContainer}>
					<div className={classes.proPrice}> <div className={classes.dollar}>$</div>{props.proPrice}</div>
					<s className={classes.actualPrice}>${actualPrice}</s>
					<div className={classes.discount}>( {props.discount}% off)</div>
				</div>

				<div className={classes.delivery}>{toShow}</div>
			</div>

			{/* <div>Remove from cart</div> */}

		</div>
	)
}
