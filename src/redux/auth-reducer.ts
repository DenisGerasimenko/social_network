import {authAPI, LoginParamsType, ResultCodeForCaptcha, ResultCodesEnum, securityAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {Action} from "redux";
import {stopSubmit} from "redux-form";
import {InferActionsTypes} from "./redux-store";





type ActionsTypes = InferActionsTypes<typeof actions>


type InitialStateType = typeof initialState


let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null //if null,then captcha is not required
}

const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case 'SET_USER_DATA':
        case 'GET_CAPTCHA_URL_SUCCESS':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const actions = {
    setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => (
        {type: 'SET_USER_DATA', payload: {userId, email, login, isAuth}} as const),
    getCaptchaUrlSuccess: (captchaUrl: string) => (
        {type: 'GET_CAPTCHA_URL_SUCCESS', payload: {captchaUrl}} as const)
}



type ThunkType = ThunkAction<void, InitialStateType, unknown, ActionsTypes>

export const getAuthUserData = (): ThunkType => async (dispatch) => {
    let meData = await authAPI.me()

    if (meData.resultCode === ResultCodesEnum.Sussess) {
        let {id, email, login} = meData.data;
        dispatch(actions.setAuthUserData(id, email, login, true));
    }
}


export const login = (data: LoginParamsType): ThunkAction<void, InitialStateType, unknown, Action<string>> =>
    async (dispatch) => {

        dispatch(stopSubmit('login', {_error: 'Common error'}));

        let LoginData = await authAPI.login(data)

        if (LoginData.resultCode === ResultCodesEnum.Sussess) {
            // success, get auth LoginData
            dispatch(getAuthUserData())
        } else {
            if (LoginData.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
                dispatch(getCaptchaUrl());
            }
            let message = LoginData.messages.length > 0 ? LoginData.messages[0] : 'Some error';
            dispatch(stopSubmit('login', {_error: message}));
        }
    }
export const getCaptchaUrl = (): ThunkAction<void, InitialStateType, unknown, Action<string>> =>
    async (dispatch) => {

        const res = await securityAPI.getCaptchaUrl()
        const captchaUrl = res.data.url;

        dispatch(actions.getCaptchaUrlSuccess(captchaUrl));
    }

export const logout = (): ThunkType => async (dispatch) => {
    let res = await authAPI.logout()

    if (res.data.resultCode === ResultCodesEnum.Sussess) {
        dispatch(actions.setAuthUserData(null, null, null, false));
    }
}


export default authReducer;