import * as actionTypes from '../actions/ActionsTypes'

const initialState = {

}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case actionTypes.GETALLBOOKS:
        return { ...state}

    default:
        return state
    }
}
