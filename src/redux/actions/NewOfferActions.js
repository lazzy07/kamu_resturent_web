import {
  OPEN_CREATE_OFFER_MODAL,
  CLOSE_CREATE_OFFER_MODAL,
  SET_TO_INITIAL,
  SET_TIME_OF_CREATE_OFFER,
  REMOVE_IMAGE,
  ADD_IMAGE,
  SET_IMAGE_URL,
  SET_TAGS,
  SET_FORM_DATA
} from "./types";

export const openCreateOfferModal = () => {
  return {
    type: OPEN_CREATE_OFFER_MODAL
  };
};

export const closeCreateOfferModal = () => {
  return {
    type: CLOSE_CREATE_OFFER_MODAL
  };
};

export const setTimeOfCreateOffer = () => {
  return {
    type: SET_TIME_OF_CREATE_OFFER,
    payload: Date.now()
  };
};

export const addImage = (bucketUrl, previewImage) => {
  return {
    type: ADD_IMAGE,
    payload: {
      bucketUrl,
      previewImage,
      imageUrl: ""
    }
  };
};

export const setImageUrl = (imageUrl, bucketUrl) => {
  return {
    type: SET_IMAGE_URL,
    payload: { imageUrl, bucketUrl }
  };
};

export const removeImage = bucketUrl => {
  return {
    type: REMOVE_IMAGE,
    payload: bucketUrl
  };
};

export const setToInitial = () => {
  return {
    type: SET_TO_INITIAL
  };
};

export const setTags = tags => {
  return {
    type: SET_TAGS,
    payload: tags
  };
};

export const setFormData = data => {
  return {
    type: SET_FORM_DATA,
    payload: data
  };
};
