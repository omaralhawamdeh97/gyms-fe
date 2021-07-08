import { combineReducers } from "redux";
import authReducer from "./authReducer";
import gymsReducer from "./gymsReducer";
import typesReducer from "./typesReducer";
import classesReducer from "./classesReducer";
import sessionsReducer from "./sessionsReducer";

const bigR = combineReducers({
  authReducer,
  gymsReducer,
  classesReducer,
  typesReducer,
  sessionsReducer,
});

export default bigR;
