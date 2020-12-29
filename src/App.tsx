import React from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import {Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./Login/Login";


const App = (props: any) => {



    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={() => <DialogsContainer/>}/>

                <Route exect path='/profile/:userId?'
                       render={() => <ProfileContainer/>}/>

                <Route path='/users'
                       render={() => <UsersContainer/>}/>
                    <Route exect path={'/login'}
                           render={() => <Login/>}/>
            </div>
        </div>
    )
}

export default App;
