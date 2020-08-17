import {ActionTypes, DialogPageType, MessageType, PostType, RootStateType} from "./store";

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state: DialogPageType, action: ActionTypes): DialogPageType => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage: MessageType = {
                id: new Date().getTime(),
                message: action.messageText,
            };
            state.messages.push(newMessage)
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;

            return state;
        default:
            return state;
    }
}

export const addMessageAC = (messageText: string) => ({type: ADD_MESSAGE, messageText}) as const

export const updateNewMessageTextAC = (newText: string) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText}) as const

export default dialogsReducer;