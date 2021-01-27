import React, {ChangeEvent, useState} from 'react';
import s from './../Profile.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/IMG-cc6fce77d19c2c7cdaacc19191b9f671-V.jpg";
import ProfileDataForm from "./ProfileDataForm";
import {ProfileType} from "../../../types/types";

type ProfileInfoPropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: any
    saveProfile: any
}

const ProfileInfo = (props: ProfileInfoPropsType) => {

    let [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files?.length) {
            props.savePhoto(e.currentTarget.files[0]);
        }
    }

    const onSubmit = (formData: ProfileType) => {
        props.saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
    }

    return (<div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos?.small || userPhoto} className={s.mainPhoto}/>
                {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                {editMode ?
                    <ProfileDataForm profile={props.profile} initialValues={props.profile} onSubmit={onSubmit}/> :
                    <ProfileData goToEditMode={() => setEditMode(true)} profile={props.profile}
                                 isOwner={props.isOwner}/>}
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )

};

type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: any
}


const ProfileData = (props: ProfileDataPropsType) => {


    return <div>
        {props.isOwner && <div>
            <button onClick={props.goToEditMode}>edit</button>
        </div>}
        <div>
            <b>Full name</b>:{props.profile?.fullName}
        </div>
        <div>
            <b>Looking for a job</b>:{props.profile?.lookingForAJob ? 'yes' : 'no'}
        </div>
        {props.profile?.lookingForAJob &&
        <div>
            <b>My professional skills</b>:{props.profile?.lookingForAJobDescription}
        </div>
        }
        <div>
            <b>About me</b>:{props.profile?.aboutMe}
        </div>
      {/*  <div>
            <b>Contacts</b>:
            {
                (props.profile != null) &&  Object.keys(props.profile?.contacts).map((key) => {
                    return <Contact key={key} contactTitle={key}
                                    contactValue={props.profile?.contacts[key as keyof ContactsType]}/>
                })
            }
        </div>*/}
    </div>

}


type ContactPropsType = {
    contactTitle: string
    contactValue: string
}
const Contact = (props: ContactPropsType) => {
    return <div className={s.contact}><b>{props.contactTitle}</b>:{props.contactValue}</div>
}

export default ProfileInfo;