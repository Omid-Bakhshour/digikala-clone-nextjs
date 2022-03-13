
import {
    ALL_CATEGORY_SUCCESS, ALL_CATEGORY_FAIL, SET_CATEGORY_SUCCESS, SET_CATEGORY_FAIL, SET_SHEARCHITEMS_SUCCESS
    , RESET_SHEARCHITEMS, UPDATE_SHEARCHPARAMS, UPDATE_SHEARCHPARAMS_DYNAMICNAME, UPDATE_SHEARCHPARAMS_DYNAMICVALUE
    , ALL_ADVERTISES_SUCCESS, ALL_ADVERTISES_FAIL, ALL_ADVERTISES_REQUEST, UPDATE_PAGE, UPDATE_ADVERTISES_SUCCESS, EMPTY_ADVERTISES
    , RESET_SHEARCHPARAMS
} from "../constants/homeConstants"


export const allCategoryReducer = (state = {}, action) => {
    switch (action.type) {


        case ALL_CATEGORY_SUCCESS:
            return {
                category: action.payload.allCategories,
                places: action.payload.places,


            }


        case ALL_CATEGORY_FAIL:
            return {
                error: action.payload
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



export const setCurrentCategoryReducer = (state = { currentCategory: { parent: null, current: null, childs: null } }, action) => {
    switch (action.type) {
        case SET_CATEGORY_SUCCESS:
            return {
                currentCategory: action.payload
            }

        case SET_CATEGORY_FAIL:
            return {
                error: action.payload
            }


        default:
            return state
    }
}


export const setSearchItemsReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_SHEARCHITEMS_SUCCESS:
            return {
                searchItems: action.payload
            }


        case RESET_SHEARCHITEMS:
            return {
                searchItems: false
            }

        // case SET_CATEGORY_FAIL:
        //     return {
        //         error: action.payload
        //     }


        default:
            return state
    }
}


export const updateSearchparamsReducer = (state = {
    searchParams: {
        dynamicItemsValue: null,
        enableSearchMore: true,
        dynamicItemsName: [],
        page: 0,
    }
}, action) => {

    switch (action.type) {
        case UPDATE_SHEARCHPARAMS:
            return {
                searchParams: { ...state.searchParams, ...action.payload }
            }


        case UPDATE_SHEARCHPARAMS_DYNAMICNAME:
            const found = state.searchParams.dynamicItemsName.find(element => element === action.payload);
            const dynamicItemsName = [...state.searchParams.dynamicItemsName, action.payload];
            if (!found) {
                return {
                    searchParams: { ...state.searchParams, dynamicItemsName }
                }
            } else {
                return {
                    searchParams: state.searchParams
                }
            }


        case UPDATE_SHEARCHPARAMS_DYNAMICVALUE:
            const dynamicItemsValue = { ...state.searchParams.dynamicItemsValue, ...action.payload };
            return {
                searchParams: { ...state.searchParams, dynamicItemsValue }
            }

        case UPDATE_PAGE:
            return {
                searchParams: { ...state.searchParams, page: state.searchParams.page + 12 }
            }

        case RESET_SHEARCHPARAMS:
            return {
                searchParams: {
                    dynamicItemsValue: null,
                    enableSearchMore: true,
                    dynamicItemsName: [],
                    page: 0,
                }
            }




        default:
            return state
    }
}



export const AllAdvertisesReducer = (state = { advertises: [] }, action) => {
    switch (action.type) {

        case ALL_ADVERTISES_REQUEST:
            return {
                ...state, loading: true
            }

        case ALL_ADVERTISES_SUCCESS:
            if (action.payload !== "max") {
                return {
                    ...state, advertises: action.payload,
                    loading: false,
                    enableSearchMore: true

                }
            } else {
                return {
                    ...state,
                    advertises: [],
                    enableSearchMore: false,
                    loading: false
                }
            }


        case UPDATE_ADVERTISES_SUCCESS:
            if (action.payload !== "max") {


                return {
                    ...state,
                    advertises: [...state.advertises, ...action.payload],
                    loading: false,
                    enableSearchMore: true

                }
            } else {
                return {
                    ...state,
                    advertises: [...state.advertises],
                    loading: false,
                    enableSearchMore: false

                }
            }


        case EMPTY_ADVERTISES:
            return {
                ...state,
                advertises: []
            }

        case ALL_ADVERTISES_FAIL:
            return {
                ...state,
                advertises: action.payload
            }

        // case SET_CATEGORY_FAIL:
        //     return {
        //         error: action.payload
        //     }


        default:
            return state
    }
}
