import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import bigR from "./reducers";
import { checkForToken } from "./actions/authActions";
import { fetchGyms } from "./actions/gymsAction";
import { fetchClasses } from "./actions/classesAction";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(bigR, composeEnhancers(applyMiddleware(thunk)));
store.dispatch(fetchGyms());

store.dispatch(fetchClasses());

store.dispatch(checkForToken());
export default store;
