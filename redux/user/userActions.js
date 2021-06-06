import axios from "axios"
import { CLEAR_STATE, FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./userTypes"

const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}

const fetchUserSuccess = userInfo => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: userInfo
    }
}

const fetchUserFailure = error => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
}

const clearState = () => {
    return {
        type: CLEAR_STATE
    }
}

export const getUserInfo = (token) => {
    return (dispatch) => {
        dispatch(fetchUserRequest())
        axios.get("https://enigmatic-mesa-42065.herokuapp.com/api/customer/getprofile", {
                headers: {
                    "token": token
                }
            })
            .then((response) => {
                console.log(response)
                dispatch(fetchUserSuccess(response.data.body))
            })
            .catch((error) => {
                dispatch(fetchUserFailure(error.message))
            })
    }
}

export const clearingState = () => {
    return (dispatch) => {
        dispatch(clearState())
    }
}

