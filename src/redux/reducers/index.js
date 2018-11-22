import { combineReducers } from "redux";
import userReducer from "./UserReducers";
import redirectReducer from "./RedirectReducer";
import newOfferReducer from "./NewOfferReducer";
import foodMenuReducer from "./FoodMenuReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  redirect: redirectReducer,
  newOffer: newOfferReducer,
  foodMenuState: foodMenuReducer
});
