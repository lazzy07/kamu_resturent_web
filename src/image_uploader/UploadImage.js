import { store } from "../firebase/firebase";

/**
 * Uploading image to firestore
 * @param {Object} image image object
 * @param {String} path path of the bucket of the image to be saved
 * @returns {Object} snapshot of the upload task including info about progress and completion
 */
export const uploadImage = (image, path) => {
  let ref = store.ref(path);
  return ref.put(image);
};

/**
 * Get progress of an upload task as a percentage
 * @param {Object} snapshot upload task object
 */
export const getProgress = snapshot => {
  return (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
};
