export const setFavorite = (payload) => {
    return {
        type: "ADD_FAVORITE",
        payload: payload
    };
};

export const removeFavorite = (payload) => {
    return {
        type: "REMOVE_FAVORITE",
        payload: payload
    };
};