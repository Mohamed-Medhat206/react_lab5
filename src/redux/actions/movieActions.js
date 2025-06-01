export const fetchMoviesRequest = () => ({
    type: "FETCH_MOVIES_REQUEST"
});

export const fetchMoviesSuccess = (movies) => ({
    type: "FETCH_MOVIES_SUCCESS",
    payload: movies
});

export const fetchMoviesFailure = (error) => ({
    type: "FETCH_MOVIES_FAILURE",
    payload: error
});

export const fetchMovies = () => {
    return async (dispatch) => {
        dispatch(fetchMoviesRequest());
        try {
            const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=29cf44b93ca83bf48d9356395476f7ad");
            const data = await response.json();
            dispatch(fetchMoviesSuccess(data.results));
        } catch (error) {
            dispatch(fetchMoviesFailure(error.message));
        }
    };
};
