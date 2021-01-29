import {instance} from "./api";

type ResponseCaptchaUrlGetType = {
    url: string
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get<ResponseCaptchaUrlGetType>(`security/get-captcha-url`).then(res=>res.data)
    }
}