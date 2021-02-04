import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from "redux";
import {ProfileType} from "../../types/types";


type PathParamsType = {
    userId: string
}

type MapPropsType = {
    profile: ProfileType
    status: string
    autorizedUserId: number | null
    isAuth: boolean

}

type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => any
}


type PropsType = RouteComponentProps<PathParamsType> & MapPropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() {
        let userId: number | null = +this.props.match.params.userId;
        if (!userId) {
            userId = this.props.autorizedUserId;
            if (!userId) {
                // todo: may be replace push with redirect
                this.props.history.push('/login');
            }
        }
        if (!userId) {
            console.error("ID should exists in URI params or in state(autorizedUserId)")
        } else {
            this.props.getUserProfile(userId)
            this.props.getStatus(userId);
        }
    }

    componentDidMount() {

        this.refreshProfile();
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>) {

        if (this.props.match.params.userId != prevProps.match.params.userId)
            this.refreshProfile();
    }

    render() {
        return (
            <Profile {...this.props}
                     isOwner={!this.props.match.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     savePhoto={this.props.savePhoto}
                     saveProfile={this.props.saveProfile}/>
        )
    }

}

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    autorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth

});

export default compose<React.ComponentType>(
    withRouter,
    connect<MapPropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {
        getUserProfile,
        getStatus,
        updateStatus,
        savePhoto,
        saveProfile
    }),
)(ProfileContainer);





