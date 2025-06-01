import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import MyCard from "./Mycard";


function Movie(){

    const {id} = useParams()
    const [movie, setMovie] = useState({})

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=29cf44b93ca83bf48d9356395476f7ad`)
        .then((res) => {setMovie(res.data)
            console.log("Data fetched successfully:", res.data);

        })
        .catch((err) => console.log(err))
    }, [])


    return (
        <div className="container">
            <h1 className="text-center my-5">Movie Details</h1>
            
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <MyCard 
                        img={movie.poster_path}
                        name={movie.title || movie.original_title}
                        info={movie.overview}
                        num={`Rating: ${movie.vote_average}`}
                        loc={`Release Date: ${movie.release_date}`}
                    />
                </div>
            </div>
        </div>
    )

}
export default Movie