import { SET_TIME_OF_CREATE_NEW_FOOD_CATEGORY } from "./types";

export const setTimeOfCreateNewFoodCategory = () => {
  return {
    type: SET_TIME_OF_CREATE_NEW_FOOD_CATEGORY,
    payload: Date.now()
  };
};
