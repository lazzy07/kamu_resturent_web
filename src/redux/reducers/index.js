import { combineReducers } from "redux";
import userReducer from "./UserReducers";
import redirectReducer from "./RedirectReducer";
import newOfferReducer from "./NewOfferReducer";
import newFoodMenuReducer from "./NewFoodMenuReducer";
import newFoodCategoryReducer from "./NewFoodCategoryReducer";
import newFoodItemReducer from "./NewFoodItemReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  redirect: redirectReducer,
  newOffer: newOfferReducer,
  newFoodMenu: newFoodMenuReducer,
  newFoodCategory: newFoodCategoryReducer,
  newFoodItem: newFoodItemReducer
});
