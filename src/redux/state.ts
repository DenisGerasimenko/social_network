let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11}],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
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
                {id: 6, name: 'Valera'}],
            newMessageText: 'it-kamasutra.com'
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrew'},
                {id: 3, name: 'Sveta'},]
        }
    },
    getState() {
        return this._state;
    },
    _callSubcriber(_state: RootStateType) {
        console.log('State changed')
    },
    subccribe(observer: any) {
        this._callSubcriber = observer;
    },
    dispatch(action:ActionTypes) { //{type:'ADD-POST'}
        if (action.type === 'ADD-POST') {
            const newPost: PostType = {
                    id: new Date().getTime(),
                    message: action.postText,
                    likesCount: 0
                }
            ;
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = '';
            this._callSubcriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {

            store._state.profilePage.newPostText = action.newText;
            this._callSubcriber(this._state);
        } else if(action.type==='ADD-MESSAGE'){
            let newMessage: MessageType = {
                    id: new Date().getTime(),
                    message: action.messageText,

                }
            ;
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = '';
            this._callSubcriber(this._state);
        } else if(action.type ==='UPDATE-NEW-MESSAGE-TEXT'){

            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubcriber(this._state);
        }

    }
}


export type MessageType = {
    id: number
    message: string
}

export type DialogType = {
    id: number
    name: string
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string

}

export type FriendType = {
    id: number,
    name: string
}
export type SidebarType = {
    friends: Array<FriendType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}
export type ActionAddPostType = {
    type: 'ADD-POST'
    postText: string
}
export type ActionUpdateNewPostTextType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
export type ActionAddMessageType = {
    type: 'ADD-MESSAGE'
    messageText: string
}
export type ActionUpdateNewMessageTextType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    newText: string
}
export type ActionTypes = ActionAddPostType | ActionUpdateNewPostTextType | ActionAddMessageType | ActionUpdateNewMessageTextType

export default store;

