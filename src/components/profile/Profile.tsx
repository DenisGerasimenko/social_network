import React from 'react';
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';

import MyPostsContainer from "./myPosts/MyPostsContainer";
import reduxStore, {ReduxStoreType} from "../../redux/redux-store";
import {ProfileType} from "../../redux/profile-reducer";


type ProfilePropsType = {
    profile: ProfileType

}

const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}


export default Profile;