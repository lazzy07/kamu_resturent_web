import {OPEN_CREATE_FOOD_MENU_MODAL, CLOSE_CREATE_FOOD_MENU_MODAL, SET_TIME_OF_CREATE_NEW_FOOD_MENU} from '../actions/types'; 

const initialState = {
    isCreateNewFoodMenuOpen: false,
    time: 0
}

const newFoodMenuReducer = (state=initialState, action) => {
    switch(action.type){
        case OPEN_CREATE_FOOD_MENU_MODAL:
            return {
                ...state,
                isCreateNewFoodMenuOpen: true
            }

        case CLOSE_CREATE_FOOD_MENU_MODAL:
            return {
                ...state,
                isCreateNewFoodMenuOpen: false
            }

        case SET_TIME_OF_CREATE_NEW_FOOD_MENU:
            return {
                ...state,
                time: action.payload,
            }

        default:
            return {
                ...state,
            }
    }
}

export default newFoodMenuReducer;