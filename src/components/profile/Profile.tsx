import React from 'react';
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';

import MyPostsContainer from "./myPosts/MyPostsContainer";
import reduxStore, {ReduxStoreType} from "../../redux/redux-store";


type profilePropsType = {
    store:ReduxStoreType

}

const Profile = () => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    )
}


export default Profile;