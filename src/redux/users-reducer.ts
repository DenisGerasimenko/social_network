const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

type LocationType={
    city:string
    country:string
}

type UsersActionTypes =
    ReturnType<typeof followAC> |
    ReturnType<typeof unfollowAC>|
    ReturnType<typeof setUsersAC>


export type UserType = {
    id: number
    photoUrl: any
    followed: boolean
    fullName: string
    status: string
    location:{city:string, country:string}
}

type InitialStateType = {
    users: Array<UserType>
}


let initialState = {
    users: [
        {
            id: 1,
            photoUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg',
            followed: false,
            fullName: 'Dmitry',
            status: 'I am  a boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 1,
            photoUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg',
            followed: true,
            fullName: 'Sasha',
            status: 'I am  a boss too',
            location: {city: 'Moskow', country: 'Russia'}
        },
        {
            id: 1,
            photoUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg',
            followed: false,
            fullName: 'Andrew',
            status: 'I am  a boss too',
            location: {city: 'Kiev', country: 'Ukraine'}
        }
    ]
};

const usersReducer = (state = initialState, action: UsersActionTypes): InitialStateType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:{
            return {...state,users:[...state.users, ...action.users]}
        }


        default:
            return state;
    }
}

export const followAC = (userId: number) => ({type: FOLLOW, userId}) as const

export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId}) as const

export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users}) as const

export default usersReducer;