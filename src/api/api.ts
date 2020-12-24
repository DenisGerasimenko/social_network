import axios from "axios";

export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    data: D
}
type AuthMeType = {
    id: number
    email: string,
    login: string
}

type PhotosType = {
    small: null
    large: null
}

type ItemType = {
    name: string
    id: number
    photos: PhotosType
    status: null
    followed: false
}

type ResponseUserGetType = {
    items: Array<ItemType>
    totalCount: number
}
export type ErrorFormikType = {
    email?: string
    password?: string
    rememberMe?: boolean
    captcha?: string
}

export type LoginParamsType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: string
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
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },
    follow(userId: number) {
        return instance.post<any>(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete<any>(`follow/${userId}`)
    },
    getProfile(userId: number) {
        console.warn('Obsolete method. Please profileAPI object.')
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {

    getProfile(userId: number) {
        return instance.get<any>(`profile/${userId}`)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
    }
}

export const authAPI = {
    me() {
        return instance.get<any>('auth/me')
    },
    login(data: LoginParamsType) {
        return instance.post<ResponseType<{ userId?: number }>>('auth/login/', data)
    }
}





