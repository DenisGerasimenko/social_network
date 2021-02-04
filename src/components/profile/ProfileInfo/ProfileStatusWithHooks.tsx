import React, {ChangeEvent, useEffect, useState} from "react";


type PropsType = {
    status: string
    updateStatus: (status: string) => void
}



const ProfileStatusWithHooks:React.FC<PropsType> = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(()=>{
        setStatus(props.status);
    },[props.status])

    const activateMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onSatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)

    }

    return (
        <div>
            {!editMode &&
            <div>
               <b>Status: </b> <span onDoubleClick={activateMode}>{props.status || '-------'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onSatusChange} autoFocus={true} onBlur={deactivateEditMode}
                       value={status}/>
            </div>
            }
        </div>
    )

};


export default ProfileStatusWithHooks;