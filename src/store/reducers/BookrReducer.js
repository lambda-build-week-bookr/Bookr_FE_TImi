import * as actionTypes from "../actions/ActionsTypes";

const initialState = {
  login: false,
  success: null,
  failure: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.LOGIN:
      return { ...state, login: payload };
    case actionTypes.SUCCESS:
      return { ...state, success: payload };
    case actionTypes.FAILURE:
      return { ...state, failure: payload };

    default:
      return state;
  }
};
