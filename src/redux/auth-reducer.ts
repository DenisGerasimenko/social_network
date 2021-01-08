import {Action, Dispatch} from "redux";
import {authAPI, LoginParamsType, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import { ThunkAction } from "redux-thunk";


const SET_USER_DATA = 'SET_USER_DATA';



type UsersActionTypes =
    | ReturnType<typeof setAuthUserData>


type InitialStateType = typeof initialState


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action: UsersActionTypes): InitialStateType => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId: null, email: null, login: null, isAuth: boolean) => (
    {type: SET_USER_DATA, payload: {userId, email, login, isAuth}} as const)




export const getAuthUserData = (): ThunkAction<void, InitialStateType, unknown, Action<string>> => (dispatch) => {
    return authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
}


export const login = (data: LoginParamsType): ThunkAction<void, InitialStateType, unknown, Action<string>> => (dispatch) => {

    dispatch(stopSubmit('login', {_error: 'Common error'}));

    authAPI.login(data)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let message = res.data.messages.length > 0 ? res.data.messages[0] : 'Some error';
                dispatch(stopSubmit('login', {_error: message}));
            }
        });
}

export const logout = (): ThunkAction<void, InitialStateType, unknown, Action<string>> => (dispatch) => {

    authAPI.logout()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
}


export default authReducer;