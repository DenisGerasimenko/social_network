import {instance, APIResponseType, ResultCodeForCaptchaEnum, ResultCodesEnum} from "./api";


type MeResponseDataType = {
    id: number
    email: string
    login: string
}

type LoginResponseDataType = {
    userId: number
}

export type LoginParamsType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: null | string
}


export const authAPI = {
    me() {
        return instance.get<APIResponseType<MeResponseDataType>>('auth/me').then(res => res.data)
    },
    login(data: LoginParamsType) {
        return instance.post<APIResponseType<LoginResponseDataType,ResultCodesEnum | ResultCodeForCaptchaEnum>>('auth/login/', data)
            .then(res => res.data)
    },
    logout() {
        return instance.delete('auth/login');
    },
}