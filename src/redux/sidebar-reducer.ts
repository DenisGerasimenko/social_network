import {ActionTypes, SidebarType} from "./store";

let initilalState = {
    friends: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},]
}

const sidebarReducer = (state = initilalState, action: ActionTypes) => {


    return state;
}

export default sidebarReducer;