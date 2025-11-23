import { useEffect, useState } from "react"
import Moviecard from "../components/Moviecard"


function Home(){

    const [movies, setMovies] = useState([])
    const moviesPerPage = 12;
    const [page , SetPage] = useState(1)
    const [search, setSearch] = useState("")

    useEffect(()=>{
// let url = "https://api.themoviedb.org/3/movie/popular?api_key="
let url = "https://api.sampleapis.com/movies/horror"

// if(search){
// // url=`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=`
// url=`https://api.sampleapis.com/movies/horror?${search}`
// }

        fetch(url)
        .then((response) => response.json())
        .then((data)=> setMovies(data));
    }, [search])

    const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

    const indexOfLastMovie = page * moviesPerPage;
const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;

const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);

const totalPages = Math.ceil(movies.length / moviesPerPage);

    return(
        <div className="pt-16">
            <input type="text" placeholder="Search Movie..." 
            className="p-2 md:p-4 border top-16 w-3/4 md:w-1/2 rounded bg-gray-900 text-white opacity-60 backdrop-blur-md transform translate-1/6 md:transform md:translate-1/2 fixed z-10"
            onChange={(e)=> {setSearch(e.target.value);
                SetPage(1)}
            }
            
            />
            <div className="movie-container p-4 mt-16 md:mt-32 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {currentMovies.map(movie=>{
                    return(<Moviecard key={movie.id} movie={movie}/>)
                })}
            </div>
            <div className="pagination flex justify-between mt-5 p-4 text-white">
                <button className="bg-gray-800 p-2 rounded-sm"
                onClick={()=>{
                    SetPage(prev=> prev-1)
                }}
                disabled={page === 1}
                >PREV</button>
                <button className="bg-gray-800 p-2 rounded-sm"
                onClick={()=>{
                    SetPage(prev=> prev+1)
                }}
                disabled={page === totalPages}

                >NEXT</button>
            </div>
        </div>
    )
}
export default Home