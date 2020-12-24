const SEND_MESSAGE = 'SEND_MESSAGE';

export type DialogActionType =
    ReturnType<typeof sendMessageCreator>


type MessageType = {
    id: number
    message: string
}
type DialogType = {
    id: number
    name: string
}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>

}

let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your IT-kamasutra'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},],
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'}
        ]
};

const dialogsReducer = (state = initialState, action: DialogActionType): DialogPageType => {
    switch (action.type) {

        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody:string) => ({type: SEND_MESSAGE,newMessageBody}as const)


export default dialogsReducer;