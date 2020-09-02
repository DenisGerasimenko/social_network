import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {DispatchType, StateType} from "../../redux/redux-store";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../redux/users-reducer";


let mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId));
        },

        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId));
        },
        setUsers:(users: Array<UserType>)=>{
            dispatch(setUsersAC(users));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;