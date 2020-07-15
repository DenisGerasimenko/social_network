import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ActionTypes, DialogType, MessageType} from "../../redux/state";

type dialogsPropsType = {
    dialogsPage: { messages: Array<MessageType>, dialogs: Array<DialogType>, newMessageText: string },
    dispatch:(action:ActionTypes)=>void
}

const Dialogs = (props: dialogsPropsType) => {

    let addMessage = () => {
        props.dispatch({type: 'ADD-MESSAGE', messageText: props.dialogsPage.newMessageText})
    }


    let dialogsElements = props.dialogsPage.dialogs.map((d: any) => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.dialogsPage.messages.map((m: any) => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>

                {messagesElements}
                <div>
                    <textarea value={props.dialogsPage.newMessageText}
                              onChange={(e) => {
                                  props.dispatch({type:'UPDATE-NEW-MESSAGE-TEXT',newText:e.currentTarget.value})}}/>
                </div>
                <div>
                    <button onClick={addMessage}>Add post</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;