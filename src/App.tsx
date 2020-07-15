import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from 'react-router-dom';
import {ActionTypes, RootStateType} from "./redux/state";

type AppPropsType = {
    state: RootStateType,
    dispatch: (action: ActionTypes) => void
}
const App = (props: AppPropsType) => {


    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar state={props.state}/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={() => <Dialogs
                           dialogsPage={props.state.dialogsPage}
                           dispatch={props.dispatch}/>}/>
                <Route path='/profile'
                       render={() => <Profile
                           profilePage={props.state.profilePage}
                           dispatch={props.dispatch}/>}/>
                {/*<Route path='/friends'
                       render={() => <Friends
                           state={props.state}/>}/>*/}
            </div>
        </div>
    )
}

export default App;
