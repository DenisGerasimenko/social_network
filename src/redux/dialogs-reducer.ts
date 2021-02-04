import {InferActionsTypes} from "./redux-store";

export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}

export type DialogPageType = {
    messages:Array<MessageType>
    dialogs: Array<DialogType>
}


type ActionsType = InferActionsTypes<typeof actions>

export type InitialStateType = typeof initialState

let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hi'},
        {id: 3, message: 'Hello'},
        {id: 4, message: 'How are you?'},
        {id: 5, message: 'How old are you?'},] as Array<MessageType>,
    dialogs: [
        {id: 1, name: 'Misha'},
        {id: 2, name: 'Fedya'},
        {id: 3, name: 'Lesha'},
        {id: 4, name: 'Maxim'},
        {id: 5, name: 'Masha'},
        {id: 6, name: 'Katya'}
    ] as Array<DialogType>
};

const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {

        case 'SN/DIALOGS/SEND_MESSAGE':
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}

export const actions={
    sendMessage: (newMessageBody: string) => ({type: 'SN/DIALOGS/SEND_MESSAGE', newMessageBody} as const)
}


export default dialogsReducer;