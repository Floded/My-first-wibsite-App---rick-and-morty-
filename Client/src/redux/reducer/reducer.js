import { ADD_FAV, DELETE_FAV, FILTER, ORDER } from "../actionsType/actionsType";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        allCharacters: [...state.allCharacters, action.payload],
        myFavorites: [...state.allCharacters, action.payload],
      };
    case DELETE_FAV:
      const filtered = state.myFavorites.filter(
        (charater) => charater.id !== action.payload
      );
      return {
        ...state,
        myFavorites: filtered,
      };
    case FILTER:
      const filtrado = [...state.allCharacters].filter(
        (character) => character.gender == action.payload
      );
      return {
        ...state,
        myFavorites: filtrado,
      };
    case ORDER:
      const ordered = [...state.allCharacters].sort((a,b)=> {
        if(a.id > b.id){
          return action.payload === "Ascendente" ? 1 : -1;
        } else if(a.id < b.id){
            return action.payload === "Descendente" ? 1 : -1;
          } else {
            return 0
          }
        });
        return {
          ...state,
          myFavorites: ordered
        }
    default:
      return { ...state };
  }
};

export default reducer;
