import React from "react";
import FriendItem from "./FriendItem/FriendItem";
import s from "./Friends.module.css";
import {FriendType} from "../../redux/state";

type FriendsPropsType={
    sidebar:{friends:Array<FriendType>}
}

const Friends = (props: FriendsPropsType) => {


    let sidebarElements = props.sidebar.friends.map((d: any) => <FriendItem name={d.name} id={d.id}/>);


    return (
        <div className={s.friends}>
            <div className={s.friendsItems}>
                {sidebarElements}
            </div>

        </div>
    )
}

export default Friends;