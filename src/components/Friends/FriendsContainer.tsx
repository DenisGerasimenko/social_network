import Friends, {MapStatePropsType} from "./Friends";
import React from "react";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";


let mapStateToProps = (state: AppStateType) => {
    return {
        friends: state.sidebar.friends
    }
}

const FriendsContainer = connect<MapStatePropsType, {}, {}, AppStateType>(mapStateToProps, {})(Friends);


export default FriendsContainer;
