import { CLEAR_STATE, FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./userTypes"

const initialState = {
    loading: false,
    userInfo: '',
    error: ''
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USER_SUCCESS:
            return {
                loading: false,
                userInfo: action.payload,
                error: ''
            }
        case FETCH_USER_FAILURE:
            return {
                loading: false,
                userInfo: '',
                error: action.payload
            }
        case CLEAR_STATE:
            return {
                loading: false,
                userInfo: '',
                error: ''
            }
        default: return state
    }
}

export default userReducer;