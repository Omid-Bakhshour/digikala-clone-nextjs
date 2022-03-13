import { combineReducers } from 'redux';

import { basket } from "./basketReducers"

const reducer = combineReducers({

    // category: allCategoryReducer,
    // currentCategory: setCurrentCategoryReducer,
    // searchItems: setSearchItemsReducer,
    // searchParams: updateSearchparamsReducer,
    // advertises: AllAdvertisesReducer,

    basket: basket,

})

export default reducer