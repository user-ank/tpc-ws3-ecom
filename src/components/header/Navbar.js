import React from 'react'
import WishlistIcon from "./WishlistIcon"
import CartIcon from "./CartIcon"
import UserIcon from "./UserIcon"
import HomeIcon from "./HomeIcon"
import { Link } from "react-router-dom"
import classes from './Navbar.module.css'

export default function Navbar() {
    return (
        <div className={classes.navbar}>
            <Link to="/products">
                <HomeIcon />
            </Link>
            <Link to="/wishlist">
                <WishlistIcon />
            </Link>
            <Link to="/cart">
                <CartIcon />
            </Link>
            <UserIcon />
        </div>
    )
}
