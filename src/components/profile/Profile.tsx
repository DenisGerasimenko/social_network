import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./myPosts/MyPostsContainer";
import {PhotosType, ProfileType} from "../../redux/profile-reducer";
import s from "../profile/Profile.module.css";


type ProfilePropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: any
    saveProfile: any

}

const Profile = (props: ProfilePropsType) => {
    debugger

    return (
        <div className={s.profile}>
            <ProfileInfo isOwner={props.isOwner}
                         profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}
                         savePhoto={props.savePhoto}
                         saveProfile={props.saveProfile}/>
            <MyPostsContainer/>
        </div>
    )
}


export default Profile;