import { REDIRECT_TO } from "../actions/types";

const initialState = "/resturant/offers";

const redirectReducer = (state = initialState, action) => {
  switch (action.type) {
    case REDIRECT_TO:
      return action.payload;

    default:
      return state;
  }
};

export default redirectReducer;
