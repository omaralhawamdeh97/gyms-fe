import * as actionTypes from "../actions/actionsTypes";

const initialState = {
  types: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TYPES:
      return {
        ...state,
        types: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
