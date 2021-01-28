import React from "react";
import './App.css';
import Navbar from "./components/navbar/Navbar";
import {HashRouter, Route, withRouter, Switch, Redirect} from 'react-router-dom';
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import store, {AppStateType} from "./redux/redux-store";
import Preloader from "./components/common/Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";


//import DialogsContainer from "./components/Dialogs/DialogsContainer";
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))

//import ProfileContainer from "./components/profile/ProfileContainer";
const ProfileContainer = React.lazy(() => import('./components/profile/ProfileContainer'))


type AppPropsType = {
    initializeApp: () => void
    initialized: boolean
}


class App extends React.Component<AppPropsType> {

    componentDidMount() {
        this.props.initializeApp();
    }



    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route path='/dialogs'
                               render={withSuspense(DialogsContainer)}/>
                        <Route exact path='/profile/:userId?'
                               render={withSuspense(ProfileContainer)}/>
                        <Route path='/users'
                               render={withSuspense(UsersContainer)}/>
                        <Route exact path={'/login'}
                               render={withSuspense(Login)}/>
                        <Redirect from={'/'} to={'/profile/:userId?'}/>
                        <Redirect from={'*'} to={'/404'}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App) as React.ComponentClass;

const TSApp = () => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}

export default TSApp;