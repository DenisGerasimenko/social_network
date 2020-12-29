import {ThunkAction} from "redux-thunk";
import {StateType} from "./redux-store";
import {Action, Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";


const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

type ProfileActionTypes =
    | ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>

type ContactsType = {
    "facebook": string
    "website": null
    "vk": string
    "twitter": string
    "instagram": string
    "youtube": null,
    "github": string
    "mainLink": null
}
type PhotosType = {
    small: string
    large: string
}

export type ProfileType = {
    "aboutMe": string
    "contacts": ContactsType
    "lookingForAJob": boolean
    "lookingForAJobDescription": string
    "fullName": string
    "userId": number
    "photos": PhotosType
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}
type ProfilePageType = {
    posts: Array<PostType>

}


let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11}],
    profile: [] as Array<ProfileType>,
    status: ''
};
type InitialStateType = typeof initialState

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
                posts: [...state.posts, newPost]
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
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText: string) => ({type: ADD_POST, newPostText} as const)

export const setUserProfile = (profile: Array<ProfileType>) => ({type: SET_USER_PROFILE, profile} as const)

export const setStatus = (status: string) => ({type: SET_STATUS, status} as const)

type DispatchType = Dispatch<ProfileActionTypes>

export const getUserProfile = (userId: number): ThunkAction<void, StateType, unknown, Action<string>> => {
    return (dispatch: DispatchType) => {
        usersAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            });
    }
}
export const getStatus = (userId: number): ThunkAction<void, StateType, unknown, Action<string>> => {
    return (dispatch: DispatchType) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data));
            });
    }
}
export const updateStatus = (status: string): ThunkAction<void, StateType, unknown, Action<string>> => {
    return (dispatch: DispatchType) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
            });
    }
}

export default profileReducer;