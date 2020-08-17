import React from 'react';
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionTypes, PostType, RootStateType} from "../../redux/store";

type profilePropsType = {
    profilePage: {posts:Array<PostType>,newPostText:string},
    dispatch: (action:ActionTypes) => void

}

const Profile = (props: profilePropsType) => {

    return (<div>
        <ProfileInfo/>
        < MyPosts
            profilePage={props.profilePage}
                dispatch={props.dispatch}/>
    </div>);
};

export default Profile;