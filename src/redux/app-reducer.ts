import {getAuthUserData} from "./auth-reducer";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {Action} from "redux";


const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


type AppActionTypes =
    | ReturnType<typeof initializedSuccess>


type InitialStateType = typeof initialState


let initialState = {
    initialized: false
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


export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());
    promise.then(() => {
        dispatch(initializedSuccess());
    })

}

export default appReducer;