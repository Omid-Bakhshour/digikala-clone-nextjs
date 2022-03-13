
import { USER_LOGIN_FAIL, USER_LOGIN_SUCCESS, REQUEST_LOADING, USER_LOGOUT_FAIL, USER_LOGOUT_SUCCESS, CLEAR_ERROR } from "../constants/userConstants"
import { Data } from "../../data/Data"

export const allUserReducers = (state = {}, action) => {

    switch (action.type) {


        case REQUEST_LOADING:
            return {
                ...state,
                loading: true,
            }

        case USER_LOGIN_SUCCESS:
            if (action.payload.answer === "correct" || action.payload.answer === "correctBan") {
                return {
                    ...state,
                    loading: false,
                    user: action.payload,
                    error: false
                }
            } else if (action.payload.answer === "wrong") {

                return {
                    ...state,
                    loading: false,
                    error: Data.failed
                }

            } else if (action.payload.answer === "wrong") {

                return {
                    ...state,
                    loading: false,
                    error: "خطایی رخ داده،لطفا دوباره تلاش کنید"
                }

            } else if (action.payload.answer === "nothing") {

                return {
                    ...state,
                    loading: false,
                    error: Data.wrongUsernameOrPass
                }

            }



        case USER_LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                error: Data.failed
            }



        case USER_LOGOUT_SUCCESS:
            return {
                ...state,
                loading: false,
                user: false,
                message: Data.logOutSuccess
            }


        case USER_LOGOUT_FAIL:
            return {
                ...state,
                loading: false,
                message: Data.failed
            }
        case CLEAR_ERROR:
            return {
                ...state,
                error: false,
                message: false

            }




        default:
            return state
    }

}


