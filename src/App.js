import Header from "./components/header/Header";
import WishlistPage from "./components/pages/WishlistPage";
import DashboardPage from "./components/pages/DashboardPage";
import CartPage from "./components/pages/CartPage";
import Loader from "./components/Loader";
import ProductPage from "./components/pages/ProductPage";
import { Routes, Route } from 'react-router-dom';
import HomePage from "./components/pages/HomePage";
// import React, { createContext } from "react";

// const Cart = React.createContext();

function App() {


	let cartList = ["habibi ", "come ", "to ", "dubai"];

	function poping(){
		cartList.pop();
	}

	document.getElementById("cartNumber").innerHTML = cartList.length;
	return (
		<>
			<Header />
			<Loader/>
			<Routes>
				<Route path="/" exact element={<HomePage/>} />
				<Route path="/products" element={<DashboardPage />} />
				<Route path="/wishlist" element={<WishlistPage />} />
				<Route path="/cart" element={<CartPage items={cartList} />} />
				<Route path="/products/:productId" element={<ProductPage onclick={poping}/>}/>
			</Routes>


		</>
	);
}

export default App;