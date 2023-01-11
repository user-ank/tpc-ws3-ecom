import Header from "./components/header/Header";
import WishlistPage from "./components/pages/WishlistPage";
import DashboardPage from "./components/pages/DashboardPage";
import CartPage from "./components/pages/CartPage";
import Loader from "./components/Loader";
import ProductPage from "./components/pages/ProductPage";
import { Routes, Route } from 'react-router-dom';


function App() {
	return (
		<>
			<Header />
			<Loader/>
			<Routes>
				<Route path="/products" element={<DashboardPage />} />
				<Route path="/wishlist" element={<WishlistPage />} />
				<Route path="/cart" element={<CartPage />} />
				<Route path="/products/:productId" element={<ProductPage />}/>
			</Routes>


		</>
	);
}

export default App;
