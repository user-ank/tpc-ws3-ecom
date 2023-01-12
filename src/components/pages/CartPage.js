import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import classes from '../ProductList.module.css'
import ProductInCart from '../ProductInCart';
// import {Cart} from '../../App'

export default function CartPage(props) {

  const [cartList, updateList] = useState(props.items);
  console.log(cartList);




  return (
    <div className={classes.list}>
      <center>Product List</center>
      {
        cartList.map(product => (
          
            <Link to={"/products/" + product.id}>
              <ProductInCart key={product.id}
                id={product.id}
                proName={product.title} 
                image={product.images[0]}
                proRating={product.rating}
                proPrice={product.price}
                discount={product.discountPercentage}
                />
            </Link>
        ))
      }
    </div>
  )
}
