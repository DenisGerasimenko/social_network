import React, {FC} from "react";
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";
import spost from './../../profile/myPosts/Post/Post.module.css'

type PropsType ={
    id: number
    name: string
}

const DialogItem: FC<PropsType> = (props) => {
    let path = '/dialogs/' + props.id;
    return <div>
        <div className={spost.item}>
            <img src='https://image.flaticon.com/icons/png/512/2253/2253998.png'/>
        </div>
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    </div>
}

export default DialogItem;

