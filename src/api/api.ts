import axios from "axios";
import {ContactsType, PhotosType, ProfileType} from "../types/types";

export type ResponseType<D = {}> = {
    resultCode: ResultCodesEnum
    messages: Array<string>
    data: D
}

export type LoginResponseType<D = {}> = {
    resultCode: ResultCodesEnum | ResultCodeForCaptcha
    messages: Array<string>
    data: D
}


type ResponseProfileGetType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
}

type ResponseCaptchaUrlGetType = {
    url: string
}

export enum ResultCodesEnum {
    Sussess = 0,
    Error = 1,
}

export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10
}


type ItemType = {
    name: string
    id: number
    photos: PhotosType
    status: null
    followed: boolean
}

type ResponseUserGetType = {
    items: Array<ItemType>
    totalCount: number
    error: null
}


export type LoginParamsType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: null | string
}


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': "4c7ebabc-af48-45d8-9001-1fb93ae1053e"
    }
})
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get<ResponseUserGetType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },
    follow(userId: number) {
        return instance.post<ResponseType>(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete<ResponseType>(`follow/${userId}`)
    },
    getProfile(userId: number) {
        console.warn('Obsolete method. Please profileAPI object.')
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {

    getProfile(userId: number) {
        return instance.get<ResponseProfileGetType>(`profile/${userId}`)
    },
    getStatus(userId: number) {
        return instance.get<string>(`profile/status/` + userId);
    },
    updateStatus(status: string) {
        return instance.put<ResponseType>(`profile/status`, {status: status})
    },
    savePhoto(photoFile: any) {
        const formData = new FormData();
        formData.append('image', photoFile);
        return instance.put<ResponseType<any>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    saveProfile(profile: ProfileType) {
        return instance.put<ResponseType>(`profile`, profile)
    }
}

export const authAPI = {
    me() {
        return instance.get<ResponseType<{ id: number, email: string, login: string }>>('auth/me').then(res => res.data)
    },
    login(data: LoginParamsType) {
        return instance.post<LoginResponseType<{ userId: number }>>('auth/login/', data)
            .then(res => res.data)
    },
    logout() {
        return instance.delete<ResponseType>('auth/login');
    },
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get<ResponseCaptchaUrlGetType>(`security/get-captcha-url`)
    }
}





