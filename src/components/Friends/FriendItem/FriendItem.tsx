import s from "../Friends.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const FriendItem = (props: any) => {
    let path = '/friends/' + props.id;
    return <div>
        <div className={s.item}>
            <img src='https://image.flaticon.com/icons/png/512/2253/2253998.png'/>
        </div>
        <div className={s.friend + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    </div>
}

export default FriendItem;