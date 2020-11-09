import axios from "axios";

export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    data: D
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


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': ""
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
        return instance.get<any>(`profile/${userId}`)
    }
}

export const authAPI = {
    me() {
        return instance.get<any>('auth/me')
    }
}





