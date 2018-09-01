import {OPEN_CREATE_FOOD_MENU_MODAL, CLOSE_CREATE_FOOD_MENU_MODAL, SET_TIME_OF_CREATE_NEW_FOOD_MENU} from './types';

export const openCreateFoodMenuModal = () => {
    return {
        type: OPEN_CREATE_FOOD_MENU_MODAL,
    }
}

export const closeCreateFoodMenuModal = () => {
    return {
        type: CLOSE_CREATE_FOOD_MENU_MODAL
    }
}

export const setTimeOfCreateNewFoodMenu = () => {
    return {
        type: SET_TIME_OF_CREATE_NEW_FOOD_MENU,
        payload: Date.now()
    }
}