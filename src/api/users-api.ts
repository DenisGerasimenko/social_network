import {instance, APIResponseType} from "./api";
import {UserType} from "../types/types";

type ResponseUserGetType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10, term: string = '') {
        return instance.get<ResponseUserGetType>(`users?page=${currentPage}&count=${pageSize}&term=${term}`)
            .then(res => {
                return res.data
            });
    },
    follow(userId: number) {
        return instance.post<APIResponseType>(`follow/${userId}`).then(res => res.data)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`).then(res => res.data) as Promise<APIResponseType>
    }
}
