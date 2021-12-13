import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "../reducers/loginReducer";
import { registerReducer } from "../reducers/registerReducer";
import { buyReducer } from "../reducers/buyReducer";
import { listarrelacionadosReducer } from "../reducers/listarrelacionadosReducer";
import { listarinspiradosReducer } from "../reducers/listarinspiradosReducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  login: loginReducer,
  register: registerReducer,
  carrito: buyReducer,
  listar: listarrelacionadosReducer,
  listarinspirados: listarinspiradosReducer
});

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
    );

    export default store