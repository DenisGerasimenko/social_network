import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {
    ActionAddPostType,
    ActionTypes,
    ActionUpdateNewPostTextType,
    addPostCreater,
    PostType, updateTextCreater
} from "../../../redux/state";


type MyPostsPropsType={
    dispatch:(action:ActionTypes)=>void
    profilePage:{posts:Array<PostType>,
        newPostText:string}
}

const MyPosts = (props: MyPostsPropsType) => {


    let postsElements = props.profilePage.posts.map((p: any) => <Post message={p.message} likesCount={p.likesCount}/>);

    let addPost = () => {

            props.dispatch(addPostCreater(props.profilePage.newPostText));
        }
        return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.profilePage.newPostText}



                              onChange={(e)=>props.dispatch(updateTextCreater(e.currentTarget.value))} />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>

        </div>);
};

export default MyPosts;