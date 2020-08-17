import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from 'react-router-dom';
import store, {ActionTypes, RootStateType, StoreType} from "./redux/store";

type AppPropsType = {
  store:StoreType
    dispatch:(action: ActionTypes) => void
}
const App:React.FC <AppPropsType>=(props)=> {

    const state=props.store.getState();

    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar state={state}/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={() => <Dialogs
                           dialogsPage={state.dialogsPage}
                           dispatch={props.dispatch}/>}/>
                <Route path='/profile'
                       render={() => <Profile
                           profilePage={state.profilePage}
                           dispatch={props.dispatch}/>}/>
                {/*<Route path='/friends'
                       render={() => <Friends
                           state={props.state}/>}/>*/}
            </div>
        </div>
    )
}

export default App;
