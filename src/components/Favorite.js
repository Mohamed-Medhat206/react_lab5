import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../redux/actions/Action";

const Favorite = () => {
    const favorites = useSelector(state => state.favorites.favorites);
    const dispatch = useDispatch();

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">My Favorites</h1>
            {favorites.length === 0 ? (
                <p className="text-center text-muted">No favorite movies yet.</p>
            ) : (
                <div className="row">
                    {favorites.map(movie => (
                        <div key={movie.id} className="col-md-4 mb-4">
                            <div className="card h-100">
                                <img 
                                    src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} 
                                    alt={movie.title} 
                                    className="card-img-top" 
                                    style={{ height: "300px", objectFit: "cover" }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{movie.title}</h5>
                                    <p className="card-text">{movie.overview}</p>
                                    <p className="card-text">
                                        <small className="text-muted">Release Date: {movie.release_date}</small>
                                    </p>
                                </div>
                                <div className="card-footer text-center">
                                    <button 
                                        className="btn btn-danger btn-sm" 
                                        onClick={() => dispatch(removeFavorite(movie))}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Favorite;