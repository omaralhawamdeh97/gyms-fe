import * as actionTypes from "../actions/actionsTypes";

const initialState = {
  gyms: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_GYMS:
      return {
        ...state,
        gyms: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
