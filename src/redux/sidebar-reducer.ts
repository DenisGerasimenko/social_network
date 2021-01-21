

export type FriendType = {
    id: number,
    name: string
}
type SidebarType = {
    friends: Array<FriendType>
}

let initilalState = {
    friends: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Ivan'},
        {id: 3, name: 'Tanya'},]
}

const sidebarReducer = (state = initilalState):SidebarType => {


    return state;
}

export default sidebarReducer;