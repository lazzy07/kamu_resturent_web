import { SET_TIME_OF_CREATE_NEW_FOOD_ITEM } from "../actions/types";

const initialState = {
  time: 0
};

const newFoodItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TIME_OF_CREATE_NEW_FOOD_ITEM:
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

export default newFoodItemReducer;
