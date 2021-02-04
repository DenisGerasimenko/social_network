import React from "react";
import {createField, GetStringKeys, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";
import s from './../Profile.module.css'
import style from "../../common/FormsControls/FormsControls.module.css";
import {ProfileType} from "../../../types/types";


// export type FormDataType = {
//     fullName: string
//     lookingForAJob: string
//     lookingForAJobDescription: string
//     aboutMe: string
//     profile: any
// }

type PropsType = {
    profile: ProfileType
}

type ProfileTypeKeys = GetStringKeys<ProfileType>


const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = ({
                                                                                              handleSubmit,
                                                                                              error,
                                                                                              profile
                                                                                          }) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <button onClick={() => {
            }}>save
            </button>
        </div>
        {error && <div className={style.formSummaryError}>
            {error}
        </div>
        }
        <div>
            <b>Full name</b>:{createField<ProfileTypeKeys>('Full name', 'fullName', [], Input)}
        </div>
        <div>
            <b>Looking for a
                job</b>: {createField<ProfileTypeKeys>('', 'lookingForAJob', [], Input, {type: 'checkbox'})}

        </div>
        {
            <div>
                <b>My professional
                    skills</b>:{createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}
            </div>
        }
        <div>
            <b>About me</b>:
            {createField<ProfileTypeKeys>('About me', 'aboutMe', [], Textarea)}
        </div>
        <div>
            <b>Contacts</b>:{Object.keys(profile.contacts).map(key => {

            return <div key={key} className={s.contact}>
                {/*todo:create some solution for embedded objects */}
                <b>{key}:{createField(key, 'contacts.' + key, [], Input)}</b>
            </div>
        })}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm<ProfileType, PropsType>({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;