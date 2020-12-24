import React from "react";
import {sendMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {StateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";

import {withAuthRedirect} from "../../hoc/WithAuthRedirect";


let mapStateToProps = (state: StateType) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        sendMessage: (newMessageBody:string) => {
            dispatch(sendMessageCreator(newMessageBody));
        }
    }
}


export default compose<React.FunctionComponent>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);