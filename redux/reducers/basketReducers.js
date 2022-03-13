import {
    ADD_TO_BASKET, REMOVE_FROM_BASKET
} from "../constants/basketConstants"

export const basket = (state = {}, action) => {
    switch (action.type) {


        case ADD_TO_BASKET:
            return {
                basket: action.payload


            }


        case REMOVE_FROM_BASKET:
            return {
            }

        // case CLEAR_ERRORS:
        //     return {
        //         ...state,
        //         error: null
        //     }

        default:
            return state
    }

}