import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {logout} from "../../redux/auth-reducer";

type HeaderAPIComponentPropsType = {
    isAuth: boolean
    login: null
    logout: () => void
}

class HeaderContainer extends React.Component<HeaderAPIComponentPropsType> {



    render() {
        return <Header {...this.props}/>
    };
}

const mapStateToProps = (state: StateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});
export default connect(mapStateToProps, {logout})(HeaderContainer);

