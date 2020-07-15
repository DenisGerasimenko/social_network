import React from "react";
import s from './../Dialogs.module.css';

type messagePropsType={
    message:string
}
const Message = (props: messagePropsType) => {
    return <div className={s.dialog}>{props.message}
    </div>


}


export default Message;