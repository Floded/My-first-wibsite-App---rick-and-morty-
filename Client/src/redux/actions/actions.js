import { ADD_FAV, DELETE_FAV } from "../actionsType/actionsType";


export const addFav = (character) => {
    return {
        type: ADD_FAV,
        payload: character
    }
};

export const deleteFav = (id) => {
    return {
        type: DELETE_FAV,
        payload: id
    }
}