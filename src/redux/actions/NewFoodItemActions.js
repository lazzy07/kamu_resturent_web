import { SET_TIME_OF_CREATE_NEW_FOOD_ITEM } from "./types";

export const setTimeOfCreateNewFoodMenu = () => {
  return {
    type: SET_TIME_OF_CREATE_NEW_FOOD_ITEM,
    payload: Date.now()
  };
};