

export type FriendType = {
    id: number,
    name: string
}
type SidebarType = {
    friends: Array<FriendType>
}

let initilalState = {
    friends: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},]
}

const sidebarReducer = (state = initilalState):SidebarType => {


    return state;
}

export default sidebarReducer;