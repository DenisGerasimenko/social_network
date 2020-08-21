import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import {Route} from 'react-router-dom';
import {ActionTypes, RootStateType, StoreType} from "./redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


type AppPropsType = {
    reduxStore:any
    state: RootStateType
    dispatch: (action: ActionTypes) => void
}
const App: React.FC<AppPropsType> = (props) => {
debugger
    return (
        <div className='app-wrapper'>
            <Header />
            <Navbar state={props.state}/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={ () => <DialogsContainer reduxStore={props.reduxStore} /> }/>

                <Route path='/profile'
                       render={ () => <Profile reduxStore={props.reduxStore}/> }/>
            </div>
        </div>
    )
}

export default App;
