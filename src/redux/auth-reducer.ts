import {ResultCodeForCaptchaEnum, ResultCodesEnum} from "../api/api";
import {FormAction, stopSubmit} from "redux-form";
import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {securityAPI} from "../api/security-api";
import {authAPI, LoginParamsType} from "../api/auth-api";


type ActionsType = InferActionsTypes<typeof actions>

type InitialStateType = typeof initialState

type ThunkType = BaseThunkType<ActionsType | FormAction>


let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null //if null,then captcha is not required
}

const authReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case 'SN/auth/SET_USER_DATA':
        case 'SN/auth/GET_CAPTCHA_URL_SUCCESS':
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
        {type: 'SN/auth/SET_USER_DATA', payload: {userId, email, login, isAuth}} as const),
    getCaptchaUrlSuccess: (captchaUrl: string) => (
        {type: 'SN/auth/GET_CAPTCHA_URL_SUCCESS', payload: {captchaUrl}} as const)
}


export const getAuthUserData = (): ThunkType => async (dispatch) => {
    let meData = await authAPI.me()

    if (meData.resultCode === ResultCodesEnum.Sussess) {
        let {id, email, login} = meData.data;
        dispatch(actions.setAuthUserData(id, email, login, true));
    }
}


export const login = (data: LoginParamsType): ThunkType =>
    async (dispatch) => {

        dispatch(stopSubmit('login', {_error: 'Common error'}));

        let LoginData = await authAPI.login(data)

        if (LoginData.resultCode === ResultCodesEnum.Sussess) {
            // success, get auth LoginData
            dispatch(getAuthUserData())
        } else {
            if (LoginData.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
                dispatch(getCaptchaUrl());
            }
            let message = LoginData.messages.length > 0 ? LoginData.messages[0] : 'Some error';
            dispatch(stopSubmit('login', {_error: message}));
        }
    }
export const getCaptchaUrl = (): ThunkType =>
    async (dispatch) => {

        const data = await securityAPI.getCaptchaUrl()
        const captchaUrl = data.url;

        dispatch(actions.getCaptchaUrlSuccess(captchaUrl));
    }

export const logout = (): ThunkType => async (dispatch) => {
    let res = await authAPI.logout()

    if (res.data.resultCode === ResultCodesEnum.Sussess) {
        dispatch(actions.setAuthUserData(null, null, null, false));
    }
}


export default authReducer;