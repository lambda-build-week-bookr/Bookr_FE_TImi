import * as actionTypes from "../actions/ActionsTypes";

const initialState = {
  login: false,
  success: null,
  failure: null,
  books: [],
  book: ""
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.LOGIN:
      return { ...state, login: payload };
    case actionTypes.SUCCESS:
      return { ...state, success: payload };
    case actionTypes.FAILURE:
      return { ...state, failure: payload };
    case actionTypes.GETALLBOOKS:
      return { ...state, books: payload };
    case actionTypes.GETONEBOOK:
      return { ...state, book: payload };

    default:
      return state;
  }
};
