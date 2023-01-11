import React from 'react'
import classes from './WishlistIcon.module.css'



export default function WishlistIcon() {
  return (
    <div className={classes.iconContainer}>
        <img alt='wishlist icon' className={classes.icon} src={require('../img/wishlistIcon.png')}/>
        Wishlist
    </div>
  )
}
