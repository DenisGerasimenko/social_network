import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {getAuthUserData} from "../../redux/auth-reducer";

type HeaderAPIComponentPropsType = {
    isAuth: boolean
    login: null
    getAuthUserData: () => void
}

class HeaderContainer extends React.Component<HeaderAPIComponentPropsType> {


    render() {
        return <Header isAuth={this.props.isAuth}
                       login={this.props.login}/>
    };
}

const mapStateToProps = (state: StateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});
export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);

