import Searchbar from "./Searchbar"
import Navbar from "./Navbar"

export default function Header() {
	return (
		<>
			<header>
				<div className='name'> Phoeni<span>x</span>.in </div>
				<Searchbar />
				<Navbar/>
				
			</header>
			<div className="hr"></div>
		</>
	)
}
