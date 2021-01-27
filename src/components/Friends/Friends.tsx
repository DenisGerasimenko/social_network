import React, {FC} from "react";
import FriendItem from "./FriendItem/FriendItem";
import s from "./Friends.module.css";
import {FriendType} from "../../redux/sidebar-reducer";

export type MapStatePropsType = {
    friends: Array<FriendType>
}
type PropsType = MapStatePropsType


const Friends: FC<PropsType> = (props) => {

    let sidebarElements = props.friends.map((d: FriendType) => <FriendItem name={d.name} id={d.id} key={d.id}/>);


    return (
        <div className={s.friends}>
            <div className={s.friendsItems}>
                {sidebarElements}
            </div>

        </div>
    )
}


export default Friends;