
const movieCardLists =[
            {
                poster:"https://m.media-amazon.com/images/I/71Gm-mdz+UL._UF1000,1000_QL80_.jpg",
                movieName: "Mersal",
                date:"2024-02-13"
            },
            {
                poster:"https://m.media-amazon.com/images/I/71Gm-mdz+UL._UF1000,1000_QL80_.jpg",
                movieName: "Mersal",
                date:"2024-02-13"
            },
            {
                poster:"https://m.media-amazon.com/images/I/71Gm-mdz+UL._UF1000,1000_QL80_.jpg",
                movieName: "Mersal",
                date:"2024-02-13"
            },
            {
                poster:"https://m.media-amazon.com/images/I/71Gm-mdz+UL._UF1000,1000_QL80_.jpg",
                movieName: "Mersal",
                date:"2024-02-13"
            },{
                poster:"https://m.media-amazon.com/images/I/71Gm-mdz+UL._UF1000,1000_QL80_.jpg",
                movieName: "Mersal",
                date:"2024-02-13"
            },
            {
                poster:"https://m.media-amazon.com/images/I/71Gm-mdz+UL._UF1000,1000_QL80_.jpg",
                movieName: "Mersal",
                date:"2024-02-13"
            }

        ]
function Moviecard (){
    
    return(
        

        <div className="p-4 mt-16 md:mt-32 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {movieCardLists.map((movie, item)=>(
                <div key={item} className="bg-gray-800 p-10 text-white rounded-lg relative  ">
                     <img src={movie.poster} alt={movie.movieName} className=" w-full h-80 object-contain-contain rounded-sm" />
            <h1 className="font-bold text-xl mt-2 mb-1">{movie.movieName}</h1>
            <p className="text-gray-300 text-sm">{movie.date}</p>
            <button className="absolute top-2 right-2">add</button>
                </div>
            ))}
           
        </div>
    )
}

export default Moviecard