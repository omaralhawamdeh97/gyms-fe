import * as actionTypes from "../actions/actionsTypes";

const initialState = {
  sessions: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SESSIONS:
      return {
        ...state,
        sessions: action.payload,
        loading: false,
      };
    case actionTypes.ADD_SESSION:
      const { newSession } = action.payload;

      return {
        ...state,
        sessions: [...state.sessions, newSession],
      };
    default:
      return state;
  }
};

export default reducer;
