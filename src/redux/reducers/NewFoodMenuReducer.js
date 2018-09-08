import { SET_TIME_OF_CREATE_NEW_FOOD_MENU } from "../actions/types";

const initialState = {
  time: 0
};

const newFoodMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TIME_OF_CREATE_NEW_FOOD_MENU:
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

export default newFoodMenuReducer;
