import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import {UserType} from "../../types/types";
import {UsersSearchForm} from "./UsersSearchForm";
import {FilterType} from "../../redux/users-reducer";


type PropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: Array<number>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    onFilterChanged: (filter: FilterType) => void
}


let Users: React.FC<PropsType> = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {
    return <div>

        <UsersSearchForm onFilterChanged = {props.onFilterChanged}/>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                   totalItemsCount={totalUsersCount} pageSize={pageSize}/>
        <div>
            {
                users.map(u => <User user={u}
                                     key={u.id}
                                     followingInProgress={props.followingInProgress}
                                     follow={props.follow}
                                     unfollow={props.unfollow}
                />)
            }
        </div>
    </div>
}

export default Users;