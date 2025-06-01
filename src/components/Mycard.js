import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFavorite, removeFavorite } from "../redux/actions/Action";

function MyCard(props) {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites.favorites);
    const isFavorite = favorites.some(fav => fav.id === props.movie.id);
    const toggleFavorite = () => {
        if (isFavorite) {
            dispatch(removeFavorite(props.movie));
        } else {
            dispatch(setFavorite(props.movie));
        }
}
    return (
        <div className="card h-100 shadow-sm" style={{ width: "18rem" }}>

            <div className="position-relative">
                <img 
                    src={"https://image.tmdb.org/t/p/w500/" + props.img} 
                    className="card-img-top" 
                    alt={props.name}
                    style={{ height: "400px", objectFit: "cover" }}
                />
                
            </div>
            <div className="card-body d-flex flex-column">
                <h5 className="card-title text-truncate">{props.name}</h5>
                <button id="but" onClick={toggleFavorite} >{isFavorite ? "❤️" : "🤍"}</button>
                
                {props.info && (
                    <p className="card-text flex-grow-1" style={{ 
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                    }}>
                        {props.info}
                    </p>
                )}
                
                <div className="mt-auto">
                    {props.num && (
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <span className="badge bg-secondary">
                                <i className="bi bi-people-fill me-1"></i> {props.num}
                            </span>
                        </div>
                    )}
                    
                    {props.loc && (
                        <div className="d-flex align-items-center mb-3">
                            <i className="bi bi-geo-alt-fill me-2"></i>
                            <small className="text-muted">{props.loc}</small>
                        </div>
                    )}
                    
                    {props.path && (
                        <Link 
                            className="btn btn-primary w-100" 
                            to={props.path}
                        >
                            View Details <i className="bi bi-chevron-right ms-1"></i>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MyCard;