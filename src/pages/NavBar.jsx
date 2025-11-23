import { Link } from "react-router-dom"

function NavBar(){
    return(
        <nav className="bg-gray-900 text-white justify-between flex p-4 w-full fixed z-10 text-xl">
            <Link to="/" className="font-bold">Movie App</Link>
            <Link to="/watchlist">Watchlist(0)</Link>
        </nav>
    )
}
export default NavBar