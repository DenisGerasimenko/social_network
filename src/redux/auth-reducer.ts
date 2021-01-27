import {authAPI, LoginParamsType, ResultCodeForCaptcha, ResultCodesEnum, securityAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {Action, Dispatch} from "redux";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'samurai-network/auth/GET_CAPTCHA_URL_SUCCESS';


type UsersActionTypes =
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof getCaptchaUrlSuccess>


type InitialStateType = typeof initialState


let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null //if null,then captcha is not required
}

const authReducer = (state = initialState, action: UsersActionTypes): InitialStateType => {

    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => (
    {type: SET_USER_DATA, payload: {userId, email, login, isAuth}} as const)

export const getCaptchaUrlSuccess = (captchaUrl: string) => (
    {type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}} as const)

type DispatchType = Dispatch<UsersActionTypes>

type ThunkType = ThunkAction<void, InitialStateType, unknown, UsersActionTypes>

export const getAuthUserData = (): ThunkType => async (dispatch) => {
    let meData = await authAPI.me()

    if (meData.resultCode === ResultCodesEnum.Sussess) {
        let {id, email, login} = meData.data;
        dispatch(setAuthUserData(id, email, login, true));
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

        dispatch(getCaptchaUrlSuccess(captchaUrl));
    }

export const logout = (): ThunkType => async (dispatch) => {
    let res = await authAPI.logout()

    if (res.data.resultCode === ResultCodesEnum.Sussess) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}


export default authReducer;