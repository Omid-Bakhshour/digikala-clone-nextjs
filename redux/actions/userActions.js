import axios from "../../api/axios"
import {
    USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, REQUEST_LOADING, USER_LOGOUT_SUCCESS, USER_LOGOUT_FAIL
    , CLEAR_ERROR
} from "../constants/userConstants"



export const login = (username, password) => async (dispatch) => {

    try {

        dispatch({
            type: REQUEST_LOADING
        })

        let options = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
        }
        var data = JSON.stringify({
            "username": username,
            "password": password
        });
        let user = await axios.post(`authentication/login1`,
            data, options
        )

        if (user.status === 200) {

            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: user.data
            })



        } else {
            dispatch({
                type: USER_LOGIN_FAIL,
                payload: "error"
            })
        }

    } catch (error) {


        dispatch({
            type: USER_LOGIN_FAIL,
            payload: "error"
        })



    }

}



export const clearError = () => async (dispatch) => {

    try {

        dispatch({
            type: CLEAR_ERROR
        })


    } catch (error) {


        dispatch({
            type: USER_LOGOUT_FAIL,
            payload: "error"
        })

    }

}




export const logOut = (token) => async (dispatch) => {

    try {

        dispatch({
            type: REQUEST_LOADING
        })

        let options = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
        }
        var data = JSON.stringify({
            "token": token,
        });
        let user = await axios.post(`authentication/logout`,
            data, options
        )

        if (user.status === 200) {

            dispatch({
                type: USER_LOGOUT_SUCCESS,
                payload: user.data
            })

        } else {
            dispatch({
                type: USER_LOGOUT_FAIL,
                payload: "error"
            })
        }
    } catch (error) {


        dispatch({
            type: USER_LOGOUT_FAIL,
            payload: "error"
        })

    }

}