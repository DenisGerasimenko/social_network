import React from "react";
import Dialogs, {MapDispatchPropsType, MapStatePropsType, OwnPropsType} from "./Dialogs";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";

import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {actions} from "../../redux/dialogs-reducer";


let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        sendMessage: (newMessageBody: string) => {
            dispatch(actions.sendMessageCreator(newMessageBody));
        }
    }
}


export default compose<React.FunctionComponent>(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);