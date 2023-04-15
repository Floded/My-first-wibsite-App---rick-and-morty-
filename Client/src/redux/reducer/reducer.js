import { ADD_FAV, DELETE_FAV } from "../actionsType/actionsType";

const initialState = {
  myFavorites: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
      };
    case DELETE_FAV:
      const filtered = state.myFavorites.filter(
        (charater) => charater.id !== action.payload
      );
      return {
        ...state,
        myFavorites: filtered,
      };
    default:
      return { ...state };
  }
};

export default reducer;
