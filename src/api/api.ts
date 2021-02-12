import axios from "axios";

export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
    resultCode: RC
    messages: Array<string>
    data: D
}

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
}

export enum ResultCodeForCaptchaEnum {
    CaptchaIsRequired = 10
}



export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': "4c7ebabc-af48-45d8-9001-1fb93ae1053e"
    }
})





