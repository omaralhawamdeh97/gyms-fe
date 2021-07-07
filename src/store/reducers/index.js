import { combineReducers } from "redux";
import authReducer from "./authReducer";
import gymsReducer from "./gymsReducer";
import classesReducer from "./classesReducer";
const bigR = combineReducers({
  authReducer,
  gymsReducer,
  classesReducer,
});

export default bigR;
