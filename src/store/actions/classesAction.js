import axios from "axios";
import instance from "./instance";
import * as actionTypes from "./actionsTypes";

export const fetchClasses = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:8000/classes");

      dispatch({
        type: actionTypes.FETCH_CLASSES,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const addClass = (newClass) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("myToken");
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      const formData = new FormData();
      for (const key in newClass) formData.append(key, newClass[key]);
      const res = await instance.post(`/classes`, formData);

      dispatch({
        type: actionTypes.ADD_CLASS,
        payload: { newClass: res.data },
      });
    } catch (error) {}
  };
};
