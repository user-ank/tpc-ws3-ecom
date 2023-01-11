import React from 'react'
import Product from './Product'
import classes from './ProductList.module.css'
import {Link} from 'react-router-dom'

export default function ProductList({products}) {
  return (
    <div className={classes.list}>
      {
        products.map(product => (
          
            <Link to={"/products/" + product.id}>
              <Product key={product.id}
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
