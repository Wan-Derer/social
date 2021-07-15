import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';

const MyPosts = (props) => {

    const postElements = props.posts.map(
        post => <Post message={post.message} likesCount={post.likesCount}/>);

    const newPostElement = React.createRef();

    const onAddPost = () => {
        props.addPost();
    };

    function onPostChange() {
        const text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        ref={newPostElement}
                        value={props.newPostText}
                        onChange={onPostChange}
                    />
                </div>
                <div>
                    <button onClick={onAddPost}>
                        Добавить сообщение
                    </button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );

}

export default MyPosts;


