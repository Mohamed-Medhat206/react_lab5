import { combineReducers } from "redux";
import favoritesReducer from "./favoritesReducer";
import moviesReducer from "./moviesReducer";

const rootReducer = combineReducers({
    favorites: favoritesReducer,
    movies: moviesReducer
});

export default rootReducer;
