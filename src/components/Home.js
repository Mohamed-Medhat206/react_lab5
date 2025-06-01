// import { useEffect, useState } from "react";
// import axios from "axios";
// import MyCard from "./Mycard";

// function Home() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://api.themoviedb.org/3/movie/popular?api_key=29cf44b93ca83bf48d9356395476f7ad")
//       .then((response) => {
//         setData(response.data.results);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);

//   return (
//     <div className="bg-dark text-white min-vh-100">
//       <div className="container py-5">
//         <h1 className="text-center mb-5 display-4">🎬 Popular Movies</h1>
//         <div className="row g-4">
//           {data.map((movie) => (
//             <div className="col-md-3" key={movie.id}>
//               <MyCard
//                 img={movie.poster_path}
//                 name={movie.original_title}
//                 path={"/movie/" + movie.id}
//                 movie={movie}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/actions/movieActions";
import MyCard from "./Mycard";

function Home() {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div className="bg-dark text-white min-vh-100">
      <div className="container py-5">
        <h1 className="text-center mb-5 display-4">🎬 Popular Movies</h1>

        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-danger text-center">{error}</p>}

        <div className="row g-4">
          {movies.map((movie) => (
            <div className="col-md-3" key={movie.id}>
              <MyCard
                img={movie.poster_path}
                name={movie.original_title}
                path={"/movie/" + movie.id}
                movie={movie}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
