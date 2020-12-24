import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogPageType} from "../../redux/dialogs-reducer";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";


type dialogsPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: (newMessageBody: string) => void
    dialogsPage: DialogPageType
    isAuth: boolean
}


const Dialogs = (props: dialogsPropsType) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);


    let addNewMessage = (values: any) => {
        props.sendMessage(values.newMessageBody);
    }

    // let addNewMessage = (values:string) => {
    //     alert(values.message);
    // }

    if (!props.isAuth) return <Redirect to={'/login'}/>;
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>

                <div>{messagesElements}</div>
            </div>
            <AddMessageFormRedux/>
        </div>
    )
}

const AddMessageForm = (props: any) => {


    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name='newMessageBody' placeholder='Enter your mesage'/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default Dialogs;