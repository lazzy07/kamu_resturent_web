import { SET_TIME_OF_CREATE_NEW_FOOD_CATEGORY } from "../actions/types";

const initialState = {
  time: 0
};

const newFoodCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TIME_OF_CREATE_NEW_FOOD_CATEGORY:
      return {
        ...state,
        time: action.payload
      };

    default:
      return {
        ...state
      };
  }
};

export default newFoodCategoryReducer;
