import React from 'react';
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionTypes, PostType, RootStateType, StoreType} from "../../redux/store";
import MyPostsContainer from "./myPosts/MyPostsContainer";
import reduxStore from "../../redux/redux-store";


type profilePropsType = {
    reduxStore:any

}

const Profile = (props: profilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer reduxStore={props.reduxStore}/>
        </div>
    )
}


export default Profile;