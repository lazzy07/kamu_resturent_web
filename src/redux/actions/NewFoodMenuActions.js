import { SET_TIME_OF_CREATE_NEW_FOOD_MENU } from "./types";

export const setTimeOfCreateNewFoodMenu = () => {
  return {
    type: SET_TIME_OF_CREATE_NEW_FOOD_MENU,
    payload: Date.now()
  };
};
