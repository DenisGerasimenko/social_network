import React from 'react';
import s from './Post.module.css';

type PropsType = {
    message: string
    likesCount: number
}

const Post = (props: PropsType) => {

    return (
        <div className={s.item}>
            <img src='https://i.dailymail.co.uk/1s/2020/05/12/05/28284602-0-image-a-47_1589256454760.jpg'/>
            {props.message}
            <div>
                <span>like {props.likesCount}</span>

            </div>
        </div>);
};

export default Post;