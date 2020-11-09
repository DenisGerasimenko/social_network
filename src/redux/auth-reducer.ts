import {ThunkAction} from "redux-thunk";
import {StateType} from "./redux-store";
import {Action, Dispatch} from "redux";
import {authAPI, usersAPI} from "../api/api";
import {setTotalUsersCount, setUsers, toggleIsFetching} from "./users-reducer";

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
                ...action.data,
                isAuth: true
            }
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
}) as const

type DispatchType = Dispatch<UsersActionTypes>

export const getAuthUserData = (): ThunkAction<void, StateType, unknown, Action<string>> => {
    return (dispatch: DispatchType) => {
        authAPI.me()
        .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    dispatch(setAuthUserData(id, email, login));
                }
            });
    }
}


export default authReducer;