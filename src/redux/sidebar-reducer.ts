export type FriendType = {
    id: number
    name: string
}
type InitilalStateType = typeof initilalState


let initilalState = {
    friends: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Ivan'},
        {id: 3, name: 'Tanya'},
    ] as Array<FriendType>
}

const sidebarReducer = (state = initilalState): InitilalStateType => {


    return state;
}

export default sidebarReducer;