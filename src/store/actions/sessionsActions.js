import axios from "axios";
import instance from "./instance";
import * as actionTypes from "./actionsTypes";

export const fetchSessions = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:8000/sessions");

      dispatch({
        type: actionTypes.FETCH_SESSIONS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const addSession = (newSession) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("myToken");
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;

      const res = await instance.post(`/sessions`, newSession);

      dispatch({
        type: actionTypes.ADD_SESSION,
        payload: { newSession: res.data },
      });
    } catch (error) {}
  };
};
