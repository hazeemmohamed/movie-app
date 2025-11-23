import GenreFilter from "../components/GenreFilter"

function WatchList(){
    return(
        <div className="pt-16">
            <input type="text" placeholder="Search Movie..." className="p-2 md:p-4 border top-16 w-3/4 md:w-1/2 rounded bg-gray-900 text-white opacity-60 backdrop-blur-md transform translate-1/6 md:transform md:translate-1/2 fixed z-10" />
           
           <div className="flex mt-20 md:mt-30 justify-center">
            <GenreFilter/>
           </div>

        </div>
    )
}
export default WatchList