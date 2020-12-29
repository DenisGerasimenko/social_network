import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean
    login: null
    logout: () => void
}

function Header(props: HeaderPropsType) {
    return (<header className={s.header}>
        <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQnNLfpaoxKO2v0-m4gmIhyp_IavIeoa1xuKlgofksobKcJ_gja&usqp=CAU'/>

        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>);
};

export default Header;

