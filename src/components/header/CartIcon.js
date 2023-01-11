import React from 'react'
import classes from './CartIcon.module.css'

export default function CartIcon() {
  return (
    <div className={classes.iconContainer}>
        <img alt='cart icon' className={classes.icon} src={require('../img/cart.png')}/>
        <div className={classes.iconNumber}>2</div>
    </div>
  )
}
