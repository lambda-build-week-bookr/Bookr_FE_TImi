import * as actionTypes from "../actions/ActionsTypes";

const initialState = {
  login: false,
  success: null,
  failure: null,
  books: null
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

    default:
      return state;
  }
};
