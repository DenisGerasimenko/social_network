const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

type ProfileActionTypes =
    | ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof setUserProfile>

type ContactsType = {
    "facebook": string
    "website": null
    "vk": string
    "twitter": string
    "instagram": string
    "youtube": null,
    "github": string
    "mainLink": null
}
type PhotosType = {
    small: string
    large: string
}

export type ProfileType = {
    "aboutMe": string
    "contacts": ContactsType
    "lookingForAJob": boolean
    "lookingForAJobDescription": string
    "fullName": string
    "userId": number
    "photos": PhotosType
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}
type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}


let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11}],
    newPostText: 'it-kamasutra.com',
    profile: [] as Array<ProfileType>
};
type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: ProfileActionTypes): InitialStateType => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST}) as const

export const updateNewPostTextActionCreator = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text}) as const

export const setUserProfile = (profile: Array<ProfileType>) => ({type: SET_USER_PROFILE, profile}) as const

export default profileReducer;