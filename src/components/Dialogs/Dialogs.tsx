import React, {FC} from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogPageType, DialogType, MessageType} from "../../redux/dialogs-reducer";
import {Redirect} from "react-router-dom";
import AddMessageForm from "./AddMessageForm/AddMessageFrom";

export type MapStatePropsType = {
    dialogsPage: DialogPageType
}
export type MapDispatchPropsType = {
    sendMessage: (newMessageBody: string) => void
}

export type OwnPropsType = {
    updateNewMessageBody: (body: string) => void
    isAuth: boolean
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType


const Dialogs: FC<PropsType> = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map((d) => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map((m) => <Message message={m.message} key={m.id}/>);


    let addNewMessage = (values: any) => {
        props.sendMessage(values.newMessageBody);
    }


    if (!props.isAuth) return <Redirect to={'/login'}/>;
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>

                <div>{messagesElements}</div>
            </div>
            <AddMessageForm onSubmit={addNewMessage}/>
        </div>
    )
}


export default Dialogs;