import { Link } from "react-router-dom";
import { useContext } from "react";
import { WatchListContext } from "../context/WatchListContext";

function NavBar() {
    const { watchList } = useContext(WatchListContext);

    return (
        <nav className="bg-gray-900 text-white justify-between flex p-4 w-full fixed z-10 text-xl">
            <Link to="/" className="font-bold">Movie App</Link>

            <Link to="/watchlist">
                Watchlist ({watchList.length})
            </Link>
        </nav>
    );
}

export default NavBar;
