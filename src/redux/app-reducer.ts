import {Action, Dispatch} from "redux";
import {authAPI, LoginParamsType, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {getAuthUserData} from "./auth-reducer";
import {ThunkAction} from "redux-thunk";


const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


type AppActionTypes =
    | ReturnType<typeof initializedSuccess>


type InitialStateType = typeof initialState


let initialState = {
    initialized: false,
    userId: null,
    email: null,
    login: null,
    isAuth: false

}

const appReducer = (state = initialState, action: AppActionTypes): InitialStateType => {

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const initializedSuccess = () => (
    {type: INITIALIZED_SUCCESS} as const)


export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    InitialStateType,
    unknown,
    Action<string>>

export const initializeApp = () =>  (dispatch: any) => {

    let promise = dispatch(getAuthUserData());
    promise.then(() => {
        dispatch(initializedSuccess());
    })
}


export default appReducer;