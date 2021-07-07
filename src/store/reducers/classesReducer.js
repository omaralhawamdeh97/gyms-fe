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
    case actionTypes.ADD_CLASS:
      const { newClass } = action.payload;

      return {
        ...state,
        classes: [...state.classes, newClass],
      };
    default:
      return state;
  }
};

export default reducer;
