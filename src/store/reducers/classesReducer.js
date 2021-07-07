import * as actionTypes from "../actions/actionsTypes";

const initialState = {
  classes: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CLASSES:
      return {
        ...state,
        classes: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
