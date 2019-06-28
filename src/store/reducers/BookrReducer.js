import * as actionTypes from "../actions/ActionsTypes";

const initialState = {
  login: false,
  success: null,
  failure: null,
  books: [],
  book: "",
  show: true,
  review: [],
  user: ""
};
// displaying of current user name and pic
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
      return { ...state, book: payload, review: payload.reviews };
    case actionTypes.ADDREVIEW:
      return { ...state, review: [...state.review, payload] };
    case actionTypes.DELETEREVIEW:
      return { ...state, review: state.review.filter(elem=> elem.id !== payload.id) };
    case actionTypes.SHOW:
      return { ...state, show: payload };
    case actionTypes.USER:
      return { ...state, user: payload };

    default:
      return state;
  }
};
