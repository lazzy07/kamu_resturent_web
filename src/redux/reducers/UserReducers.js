import { GET_USER_DATA } from "../actions/types";

const initialState = {
  userName: null,
  email: null,
  password: null,
  emailVerified: false,
  uid: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_DATA:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
