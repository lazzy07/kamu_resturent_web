import { GET_USER_DATA } from "./types";

export const getUserData = data => {
  return {
    type: GET_USER_DATA,
    payload: {
      userName: data.displayName,
      email: data.email,
      password: data.password,
      emailVerified: data.emailVerified,
      uid: data.uid
    }
  };
};
