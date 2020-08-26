import Friends from "./Friends";
import React from "react";
import {ReduxStoreType, StateType} from "../../redux/redux-store";
import {connect} from "react-redux";


let mapStateToProps = (state: StateType) => {
    return {
        friends: state.sidebar.friends
    }
}

const FriendsContainer = connect(mapStateToProps, {})(Friends);


export default FriendsContainer;
