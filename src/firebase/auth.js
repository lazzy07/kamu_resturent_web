import { auth } from "./firebase";

export let authUser = auth.currentUser;
// Sign In
export const doSignInWithEmailAndPassword = async (email, password) => {
  let res = await auth.signInWithEmailAndPassword(email, password);
  authUser = auth.currentUser;
  return res;
};

// Sign out
export const doSignOut = () => auth.signOut();

//Send verification email
export const sendVerificationEmail = () => {
  return authUser
    .sendEmailVerification()
    .then(() => {
      console.log("Auth email : sent!");
      return true;
    })
    .catch(function(error) {
      console.log("Auth email : " + error);
      return false;
    });
};

// Password Reset
export const doPasswordReset = email => auth.sendPasswordResetEmail(email);

// Password Change
export const doPasswordUpdate = password =>
  auth.currentUser.updatePassword(password);
