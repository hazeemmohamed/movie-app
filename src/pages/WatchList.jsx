import { useContext, useState } from "react";
import { WatchListContext } from "../context/WatchListContext";
import Moviecard from "../components/Moviecard";
import GenreFilter from "../components/GenreFilter";

function WatchList({movies}) {
  const { watchList } = useContext(WatchListContext);
  const [search, setSearch] = useState("")

  const filteredMovies = watchList.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div className="pt-16">
        <input type="text" 
        placeholder="Search Movie..." 
        className="p-2 md:p-4 border top-16 w-3/4 md:w-1/2 rounded bg-gray-900 text-white opacity-60 backdrop-blur-md transform translate-1/6 md:transform md:translate-1/2 fixed z-10" 
        onChange={(e)=> setSearch(e.target.value)
                
            }
        /> 
        <div className="flex mt-20 md:mt-30 justify-center"> <GenreFilter/> </div>

      <h1 className="text-2xl text-white mb-4 px-4">My WatchList</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {watchList.length === 0 ? (
          <p className="text-white">No movies added yet</p>
        ) : (
          filteredMovies.map((movie) => (
            <Moviecard key={movie.id} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
}

export default WatchList;
