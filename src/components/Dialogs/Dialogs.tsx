import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageAC,updateNewMessageTextAC} from "../../redux/dialogs-reducer";
import {ActionTypes, DialogType, MessageType} from "../../redux/store";

type dialogsPropsType = {
    dialogsPage: { messages: Array<MessageType>, dialogs: Array<DialogType>, newMessageText: string },
    dispatch: (action: ActionTypes) => void
}


const Dialogs = (props: dialogsPropsType) => {

    let addMessage = () => {
        props.dispatch(addMessageAC(props.dialogsPage.newMessageText))
    }


    let dialogsElements = props.dialogsPage.dialogs.map((d: any) => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.dialogsPage.messages.map((m: any) => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>

                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={props.dialogsPage.newMessageText}
                                   onChange={(e) => {
                                       props.dispatch(updateNewMessageTextAC(e.currentTarget.value))
                                   }}></textarea>
                    </div>
                    <div><button onClick={addMessage}>Add message</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;