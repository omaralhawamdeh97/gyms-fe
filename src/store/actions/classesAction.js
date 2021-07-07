import axios from "axios";

import * as actionTypes from "./actionsTypes";

export const fetchClasses = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:8000/classes");
      console.log(res, "ress");
      dispatch({
        type: actionTypes.FETCH_CLASSES,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
