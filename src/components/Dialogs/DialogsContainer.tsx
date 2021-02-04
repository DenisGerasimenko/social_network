import React from "react";
import Dialogs, {PropsType} from "./Dialogs";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {actions} from "../../redux/dialogs-reducer";


let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}


export default compose<React.FunctionComponent>(
    connect<{}, {}, PropsType, AppStateType>(mapStateToProps, {...actions}),
    withAuthRedirect
)(Dialogs);