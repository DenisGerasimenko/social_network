import React from 'react';
import MyPosts, {MapDispatchPropsType, MapStatePropsType} from "./MyPosts";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {actions} from "../../../redux/profile-reducer";


let mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts
    }
}

let mapDispatchToProps = (dispatch:Dispatch) => {
    return {
        addPost: (newPostText:string) => {
            dispatch(actions.addPostActionCreator(newPostText))
        }
    }
}


const MyPostsContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;