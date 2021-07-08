import axios from "axios";

import * as actionTypes from "./actionsTypes";

export const fetchTypes = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:8000/types");

      dispatch({
        type: actionTypes.FETCH_TYPES,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
