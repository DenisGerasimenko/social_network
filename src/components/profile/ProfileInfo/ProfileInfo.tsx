import React, {ChangeEvent} from 'react';
import s from './../Profile.module.css'
import {PhotosType, ProfileType} from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/IMG-cc6fce77d19c2c7cdaacc19191b9f671-V.jpg";

type ProfileInfoPropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: any
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
const onMainPhotoSelected = (e:ChangeEvent<HTMLInputElement>) =>{
        if(e.currentTarget.files?.length){
            props.savePhoto(e.currentTarget.files[0]);
        }
}

    return (<div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos?.small || userPhoto} className={s.mainPhoto}/>
                {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )

};

export default ProfileInfo;