import { createStore } from "redux";
// Debajo de esta linea importar los reducers:
import reducer from "../reducer/reducer";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default store