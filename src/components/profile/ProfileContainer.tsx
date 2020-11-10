import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {getUserProfile, ProfileType} from "../../redux/profile-reducer";
import {withRouter, Redirect} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


type ProfileApiComponentPropsType = {
    profile: ProfileType
    isAuth: boolean
    getUserProfile: (userId: number) => void
}

class ProfileContainer extends React.Component<any, any> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: StateType) => ({
    profile: state.profilePage.profile
});

export default compose<React.ComponentClass>(
    connect(mapStateToProps,{getUserProfile}),
withRouter,
)(ProfileContainer);





