import {Dispatch} from "redux";
import {authAPI, LoginParamsType, usersAPI} from "../api/api";


const SET_USER_DATA = 'SET_USER_DATA';
const SET_IS_LOGGED_IN = 'SET_IS_LOGGED_IN';


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



type DispatchType = Dispatch<UsersActionTypes>

export const getAuthUserData = () => (dispatch: DispatchType) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserData(id, email, login,true));
            }
        });
}


export const login = (data: LoginParamsType) => (dispatch: any) => {

    authAPI.login(data)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
        });
}

export const logout = () => (dispatch: any) => {

    authAPI.logout()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null,false));
            }
        });
}


export default authReducer;