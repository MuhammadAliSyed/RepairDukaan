import { LOG_OUT, SIGN_IN_FAILURE, SIGN_IN_REQUEST, SIGN_IN_SUCCESS } from "./authTypes"

const initialState = {
    loading: false,
    token: '',
    error: ''
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SIGN_IN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case SIGN_IN_SUCCESS:
            return {
                loading: false,
                token: action.payload,
                error: ''
            }
        case SIGN_IN_FAILURE:
            return {
                loading: false,
                token: '',
                error: action.payload
            }
        case LOG_OUT:
            return {
                loading: false,
                token: '',
                error: ''
            }
        default: return state
    }
}

export default authReducer;