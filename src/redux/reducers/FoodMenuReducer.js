import {
  LOAD_FOOD_MENUS,
  LOAD_FOOD_CATEGORIES,
  LOAD_FOOD_ITEMS
} from "../actions/FoodMenuActions";

const initialState = {
  foodMenus: [],
  foodCategories: [],
  foodItems: []
};

const foodMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_FOOD_MENUS:
      return {
        ...state,
        foodMenus: action.payload
      };

    case LOAD_FOOD_CATEGORIES:
      return {
        ...state,
        foodCategories: action.payload
      };

    case LOAD_FOOD_ITEMS:
      return {
        ...state,
        foodItems: action.payload
      };

    default:
      return {
        ...state
      };
  }
};

export default foodMenuReducer;
