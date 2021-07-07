import axios from "axios";

import * as actionTypes from "./actionsTypes";

export const fetchGyms = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:8000/gyms");
      console.log(res, "ress");
      dispatch({
        type: actionTypes.FETCH_GYMS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
