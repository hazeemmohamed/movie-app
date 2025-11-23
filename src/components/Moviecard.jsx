import { useContext } from "react";
import { WatchListContext } from "../context/WatchListContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";

function Moviecard({ movie }) {
  const { watchList, addToWatchList, removeFromWatchList } =
    useContext(WatchListContext);

  const isFav = watchList.some((m) => m.id === movie.id);

  return (
    <div>
      <div className="bg-gray-800 p-10  md:h-[55vh] text-white rounded-lg relative">
        <img
          src={movie.posterURL}
          alt={movie.title}
          className="w-full h-80 object-contain rounded-sm"
        />

        <h1 className="font-bold text-xl mt-2">{movie.title}</h1>
        <p className="text-gray-300 text-sm">{movie.imdbId}</p>

        <button
          className="absolute top-2 right-2 text-red-500"
          onClick={() => {
            isFav ? removeFromWatchList(movie.id) : addToWatchList(movie);
          }}
        >
          {isFav ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>
    </div>
  );
}

export default Moviecard;
