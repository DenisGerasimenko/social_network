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
        {id: 2, message: 'Hi'},
        {id: 3, message: 'Hello'},
        {id: 4, message: 'How are you?'},
        {id: 5, message: 'How old are you?'},],
    dialogs: [
        {id: 1, name: 'Misha'},
        {id: 2, name: 'Fedya'},
        {id: 3, name: 'Lesha'},
        {id: 4, name: 'Maxim'},
        {id: 5, name: 'Masha'},
        {id: 6, name: 'Katya'}
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