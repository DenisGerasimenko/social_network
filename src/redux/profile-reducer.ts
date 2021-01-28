import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {Action, Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {PhotosType, PostType, ProfileType} from "../types/types";


const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

type ProfileActionTypes =
    | ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof deletePost>
    | ReturnType<typeof savePhotoSuccess>




let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'It\'s my first post', likesCount: 11},
        {id: 4, message: 'It\'s my first post', likesCount: 11}] as Array<PostType>,
    profile: {} as ProfileType,
    status: '',
    newPostText:''
};
export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: ProfileActionTypes): InitialStateType => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText:''
            };
        }

        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.id != action.postId)}
        }
        case SAVE_PHOTO_SUCCESS: {
            return {...state, profile: {...state.profile, photos: action.photos}}
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText: string) => ({type: ADD_POST, newPostText} as const)

export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const)

export const setStatus = (status: string) => ({type: SET_STATUS, status} as const)

export const deletePost = (postId: number) => ({type: DELETE_POST, postId} as const)

export const savePhotoSuccess = (photos: PhotosType) => ({type: SAVE_PHOTO_SUCCESS, photos} as const)


type DispatchType = Dispatch<ProfileActionTypes>

type ThunkType = ThunkAction<void, AppStateType, unknown, ProfileActionTypes>

export const getUserProfile = (userId: number): ThunkType => {

    return async (dispatch: DispatchType) => {
        let response = await usersAPI.getProfile(userId)
        dispatch(setUserProfile(response.data));

    }
}
export const getStatus = (userId: number): ThunkType => {
    return async (dispatch) => {
        let response = await profileAPI.getStatus(userId)

        dispatch(setStatus(response.data));
    }
}
export const updateStatus = (status: string): ThunkType => {
    return async (dispatch) => {
            let response = await profileAPI.updateStatus(status)
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
    }
}

export const savePhoto = (file: any): ThunkType => {
    return async (dispatch: DispatchType) => {
        let response = await profileAPI.savePhoto(file)
        if (response.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.data.photos));
        }
    }
}


export const saveProfile = (profile: any): ThunkAction<void, AppStateType, unknown, Action<string>> => {
    return async (dispatch, getState: ()=> AppStateType ) => {
        const userId = getState().auth.userId;
        let response = await profileAPI.saveProfile(profile)
        if (response.data.resultCode === 0) {
            if (userId) {
                dispatch(getUserProfile(userId));
            }
        }else {
            dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}));
          return Promise.reject(response.data.messages[0]);
        }
    }
}

export default profileReducer;