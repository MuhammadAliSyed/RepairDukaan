import axios from "axios"
import { clearingState } from "../user/userActions"
import { LOG_OUT, SIGN_IN_FAILURE, SIGN_IN_REQUEST, SIGN_IN_SUCCESS } from "./authTypes"

const signInRequest = () => {
    return {
        type: SIGN_IN_REQUEST
    }
}

const signInSuccess = token => {
    return {
        type: SIGN_IN_SUCCESS,
        payload: token
    }
}

const signInFailure = error => {
    return {
        type: SIGN_IN_FAILURE,
        payload: error
    }
}
const logOut = () => {
    return {
        type: LOG_OUT
    }
}

export const signIn = (email, password) => {
    return (dispatch) => {
        dispatch(signInRequest())
        console.log(email, password)
        axios.post('https://enigmatic-mesa-42065.herokuapp.com/login/customer', {email, password})
            .then((response) => {
                dispatch(signInSuccess(response.data.body.token))
            })
            .catch((error) => {
                dispatch(signInFailure(error.message))
            })
    }
}

export const signOut = () => {
    return (dispatch) => {
        dispatch(logOut())
    }
}