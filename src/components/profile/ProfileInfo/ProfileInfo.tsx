import React from 'react';
import s from './../Profile.module.css'

const ProfileInfo = () => {
    return (<div>
            <div>
                <img src='https://avatars.mds.yandex.net/get-pdb/872807/fd5593a8-465f-4a83-9ac9-4ec6dce00fb6/s600'/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>
    )

};

export default ProfileInfo;