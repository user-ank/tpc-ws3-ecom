import React from 'react'
import { useState } from 'react'
// import {Cart} from '../../App'

export default function CartPage(props) {

  const [cartList, updateList] = useState(props.items);
  console.log(cartList);

  return (
    <div>
      Your Cart
      
    </div>
  )
}
