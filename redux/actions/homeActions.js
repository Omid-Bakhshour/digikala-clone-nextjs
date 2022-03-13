
import {
    ALL_CATEGORY_FAIL, ALL_CATEGORY_SUCCESS, SET_CATEGORY_FAIL, SET_CATEGORY_SUCCESS, SET_SHEARCHITEMS_SUCCESS, RESET_SHEARCHITEMS
    , UPDATE_SHEARCHPARAMS, UPDATE_SHEARCHPARAMS_DYNAMICVALUE, UPDATE_SHEARCHPARAMS_DYNAMICNAME, ALL_ADVERTISES_SUCCESS, ALL_ADVERTISES_FAIL
    , ALL_ADVERTISES_REQUEST, UPDATE_PAGE, UPDATE_ADVERTISES_SUCCESS, EMPTY_ADVERTISES, RESET_SHEARCHPARAMS
} from "../constants/homeConstants"

import axios from "../../api/axios"


export const getAllCategory = () => async (dispatch) => {
    try {
        const { data } = await axios.post(`index/getcategories/`)

        dispatch({
            type: ALL_CATEGORY_SUCCESS,
            payload: data
        })
    } catch (error) {


        dispatch({
            type: ALL_CATEGORY_FAIL,
            payload: "error"
        })
    }
}



export const getSearchItems = (categoryName) => async (dispatch) => {

    const { data } = await axios.post(`index/getSearchItem/${categoryName}`)

    try {
        dispatch({
            type: SET_SHEARCHITEMS_SUCCESS,
            payload: data.answer1
        })
    } catch (error) {


        // dispatch({
        //     type: SET_CATEGORY_FAIL,
        //     payload: "error"
        // })
    }
}



export const setCurrentCategory = (data) => async (dispatch) => {

    try {
        dispatch({
            type: SET_CATEGORY_SUCCESS,
            payload: data
        })
    } catch (error) {


        dispatch({
            type: SET_CATEGORY_FAIL,
            payload: "error"
        })
    }

}





export const resetAllData = () => async (dispatch) => {

    try {
        dispatch({ type: RESET_SHEARCHITEMS })
        dispatch({ type: RESET_SHEARCHPARAMS })

        dispatch({ type: EMPTY_ADVERTISES })

    } catch (error) {


        // dispatch({
        //     type: SET_CATEGORY_FAIL,
        //     payload: "error"
        // })
    }

}


export const updateSearchParams = (data) => async (dispatch) => {

    try {
        dispatch({
            type: UPDATE_SHEARCHPARAMS,
            payload: data
        })
    } catch (error) {


        // dispatch({
        //     type: SET_CATEGORY_FAIL,
        //     payload: "error"
        // })
    }

}


export const updatePage = () => async (dispatch) => {

    try {
        dispatch({
            type: UPDATE_PAGE,
        })
    } catch (error) {


        // dispatch({
        //     type: SET_CATEGORY_FAIL,
        //     payload: "error"
        // })
    }

}




export const UpdateDynamicParamsName = (data) => async (dispatch) => {

    try {
        dispatch({
            type: UPDATE_SHEARCHPARAMS_DYNAMICNAME,
            payload: data
        })
    } catch (error) {


        // dispatch({
        //     type: SET_CATEGORY_FAIL,
        //     payload: "error"
        // })
    }

}


export const UpdateDynamicParamsValue = (data) => async (dispatch) => {

    try {
        dispatch({
            type: UPDATE_SHEARCHPARAMS_DYNAMICVALUE,
            payload: data
        })
    } catch (error) {


        // dispatch({
        //     type: SET_CATEGORY_FAIL,
        //     payload: "error"
        // })
    }

}


export const getAllAdvertises = (categoryName) => async (dispatch) => {
    try {

        dispatch({ type: ALL_ADVERTISES_REQUEST })
        let json = { dynamicData: {}, staticData: {} };
        json.staticData = { "categoryName": categoryName };
        const { data } = await axios.post(`index/getAdvertise/`, json)
        dispatch({
            type: ALL_ADVERTISES_SUCCESS,
            payload: data
        })
    } catch (error) {


        dispatch({
            type: ALL_ADVERTISES_FAIL,
            payload: "error"
        })
    }
}

export const updateAdvertises = (json) => async (dispatch) => {
    try {

        dispatch({ type: ALL_ADVERTISES_REQUEST })

        const { data } = await axios.post(`index/getAdvertise/`, json);
        dispatch({
            type: UPDATE_ADVERTISES_SUCCESS,
            payload: data
        })
    } catch (error) {


        dispatch({
            type: ALL_ADVERTISES_FAIL,
            payload: "error"
        })
    }
}

export const emptyAdvertises = () => async (dispatch) => {
    try {

        dispatch({ type: EMPTY_ADVERTISES })


    } catch (error) {



    }
}
