import React from 'react';
import s from './../Profile.module.css'
import {ProfileType} from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";

type ProfileInfoPropsType = {
    profile: ProfileType
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (<div>
            <div>
                <img src='https://avatars.mds.yandex.net/get-pdb/872807/fd5593a8-465f-4a83-9ac9-4ec6dce00fb6/s600'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos?.small}/>
                ava+description
            </div>
        </div>
    )

};

export default ProfileInfo;