import React, {ChangeEvent} from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {ActionTypes, PostType, StoreType} from "../../../redux/store";
import MyPosts from "./MyPosts";


type MyPostsPropsType = {
    reduxStore:any
}

const MyPostsContainer = (props: MyPostsPropsType) => {

    let state = props.reduxStore.getState();

    let addPost = () => {

        props.reduxStore.dispatch(addPostActionCreator());
    }

    let onPostChange = (text:string) => {
        let action = updateNewPostTextActionCreator(text);
        props.reduxStore.dispatch(action);
    }
    return(<MyPosts updateNewPostText={onPostChange} addPost={addPost}
                    posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} dispatch={state.dispatch}/>)

}
export default MyPostsContainer;