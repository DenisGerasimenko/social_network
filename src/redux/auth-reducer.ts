import {Dispatch} from "redux";
import {authAPI, LoginParamsType, usersAPI} from "../api/api";


const SET_USER_DATA = 'SET_USER_DATA';
const SET_IS_LOGGED_IN = 'SET_IS_LOGGED_IN';


type UsersActionTypes =
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof setIsLoggedInAC>


type InitialStateType = typeof initialState


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isLoggedIn: false
}

const authReducer = (state = initialState, action: UsersActionTypes): InitialStateType => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case SET_IS_LOGGED_IN:
            return {...state, isLoggedIn: action.value}
        default:
            return state;
    }
}

export const setAuthUserData = (userId: null, email: null, login: null) => ({
    type: SET_USER_DATA,
    data: {
        userId,
        email,
        login
    }
} as const)

export const setIsLoggedInAC = (value: boolean) => ({
    type: 'SET_IS_LOGGED_IN', value
} as const)

type DispatchType = Dispatch<UsersActionTypes>

export const getAuthUserData = () => (dispatch: DispatchType) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserData(id, email, login));
            }
        });
}


export const loginTC = (data: LoginParamsType) => (dispatch: any) => {

    authAPI.login(data)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(getAuthUserData())
                dispatch(setIsLoggedInAC(true))
            }
        });
}









export default authReducer;