import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import bigR from "./reducers";
import { checkForToken, fetchUsers } from "./actions/authActions";
import { fetchGyms } from "./actions/gymsAction";
import { fetchClasses } from "./actions/classesAction";
import { fetchTypes } from "./actions/typesActions";
import { fetchSessions } from "./actions/sessionsActions";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(bigR, composeEnhancers(applyMiddleware(thunk)));

store.dispatch(fetchGyms());
store.dispatch(fetchClasses());
store.dispatch(fetchTypes());
store.dispatch(fetchSessions());
store.dispatch(checkForToken());
export default store;
