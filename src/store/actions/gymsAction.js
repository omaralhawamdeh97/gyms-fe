import axios from "axios";
import instance from "./instance";
import * as actionTypes from "./actionsTypes";

export const fetchGyms = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:8000/gyms");

      dispatch({
        type: actionTypes.FETCH_GYMS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addGym = (newGym, history, setError) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("myToken");
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      const formData = new FormData();
      for (const key in newGym) formData.append(key, newGym[key]);
      const res = await instance.post(`/gyms`, formData);
      dispatch({
        type: actionTypes.ADD_GYM,
        payload: { newGym: res.data },
      });
      history.push("/");
    } catch (error) {
      if (error.message.includes("401")) {
        setError(true);
      } else {
        console.log(error);
      }
    }
  };
};
