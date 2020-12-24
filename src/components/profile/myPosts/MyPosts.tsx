import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {PostType} from "../../../redux/profile-reducer";
import {Button, TextareaAutosize, TextField} from "@material-ui/core";
import {useFormik} from "formik";


type MyPostsPropsType = {
    addPost: () => void
    updateNewPostText: (text: string) => void
    posts: Array<PostType>
    newPostText: string
}

const MyPosts = (props: MyPostsPropsType) => {
    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.updateNewPostText(text);
        }
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
                <AddPostForm/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const AddPostForm = (props: any) => {
    const formik = useFormik({
        initialValues: {
            post: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values));
        },
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <TextField
                id="outlined-basic"
                label="post"
                variant="outlined"
                name="post"
                onChange={formik.handleChange}
                value={formik.values.post}
            />
            <Button type={'submit'} variant={'contained'} color={'primary'}>Add post</Button>

        </form>
    )
}
export default MyPosts;