import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {getAuthUserData, logout} from "../../redux/auth-reducer";

type HeaderAPIComponentPropsType = {
    isAuth: boolean
    login: null
    getAuthUserData: () => void
    logout: () => void
}

class HeaderContainer extends React.Component<HeaderAPIComponentPropsType> {

componentDidMount() {
    this.props.getAuthUserData();
}

    render() {
        return <Header {...this.props}/>
    };
}

const mapStateToProps = (state: StateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});
export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer);

