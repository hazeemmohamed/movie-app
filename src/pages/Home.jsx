import Moviecard from "../components/Moviecard"

function Home(){
    return(
        <div className="pt-16">
            <input type="text" placeholder="Search Movie..." className="p-2 md:p-4 border top-16 w-3/4 md:w-1/2 rounded bg-gray-900 text-white opacity-60 backdrop-blur-md transform translate-1/6 md:transform md:translate-1/2 fixed z-10" />
            <div className="movie-container">
                <Moviecard/>
            </div>
            <div className="pagination flex justify-between mt-5 p-4 text-white">
                <button className="bg-gray-800 p-2 rounded-sm">PREV</button>
                <button className="bg-gray-800 p-2 rounded-sm">NEXT</button>
            </div>
        </div>
    )
}
export default Home