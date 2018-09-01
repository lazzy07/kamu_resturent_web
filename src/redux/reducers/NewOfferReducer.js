import firebase from 'firebase/app';
import 'firebase/storage';

import {OPEN_CREATE_OFFER_MODAL, CLOSE_CREATE_OFFER_MODAL, SET_TO_INITIAL, SET_TIME_OF_CREATE_OFFER, REMOVE_IMAGE, ADD_IMAGE, SET_IMAGE_URL, SET_TAGS, SET_FORM_DATA} from '../actions/types';

const initialState = {
    createOfferModalOpen : false,
    description: '',
    tags: [],
    hashTag: '',
    price: 0,
    discount: 0,
    images: [],
    uploadImageButtons: 0,
    time: 0,
}

const newOfferReducer = (state = initialState, action) => {
    switch(action.type){
        case OPEN_CREATE_OFFER_MODAL:
            return{
                ...state,
                createOfferModalOpen: true,
            }
        
        case CLOSE_CREATE_OFFER_MODAL:
            return{
                ...state,
                createOfferModalOpen: false,
                ...initialState
            }

        case SET_TAGS:
            return{
                ...state,
                tags: action.payload,
            }

        case SET_TO_INITIAL:
            if(state.images){
                for(let i=0;i<state.images.length; i++){
                    if(state.images[i].imageUrl !== ""){
                        const storageRef = firebase.storage().ref(state.images[i].bucketUrl);
                        storageRef.delete();
                    }
                }
            }

            return {
                ...state,
                ...initialState
            }

        case SET_TIME_OF_CREATE_OFFER:
            return{
                ...state,
                time: action.payload
            }

        case ADD_IMAGE:
            let imgArr = state.images;
            imgArr.push(action.payload);
            return{
                ...state,
                images: imgArr,
            }

        case SET_IMAGE_URL: 
            let withImgUrl = state.images;
            for(let i=0;i<state.images.length;i++){
                if(state.images[i].bucketUrl === action.payload.bucketUrl){
                    withImgUrl[i].imageUrl = action.payload.imageUrl
                }
            }
            return{
                ...state,
                images: withImgUrl
            }

        case SET_FORM_DATA:
            return{
                ...state,
                ...action.payload
            }

        case REMOVE_IMAGE:
            let remArr = state.images;
            for(let i=0;i< state.images.length; i++){
                if(state.images[i].bucketUrl === action.payload){
                    remArr.splice(i,1);
                }
            }
            return{
                ...state,
                images: remArr
            }

        default:
            return {
                ...state,
            }
    }
}

export default newOfferReducer;