

import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from "../constants/basketConstants"


export const AddDataToBasket = (data) => async (dispatch) => {

    try {
        dispatch({
            type: ADD_TO_BASKET,
            payload: {
                quantity: 1,
                product: data
            }
        })
    } catch (error) {


        // dispatch({
        //     type: SET_CATEGORY_FAIL,
        //     payload: "error"
        // })
    }

}