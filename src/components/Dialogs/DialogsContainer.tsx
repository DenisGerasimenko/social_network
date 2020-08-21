import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {ActionTypes, DialogType, MessageType, StoreType} from "../../redux/store";
import Dialogs from "./Dialogs";

type dialogsPropsType = {
    reduxStore: any
}


const DialogsContainer = (props: dialogsPropsType) => {

    let state = props.reduxStore.getState().dialogsPage;


    let onSendMessageClick = () => {
        props.reduxStore.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (body: string) => {

        props.reduxStore.dispatch(updateNewMessageBodyCreator(body));
    }

    return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}
                    dialogsPage={state}/>
}

export default DialogsContainer;