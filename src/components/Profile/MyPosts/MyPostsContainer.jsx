import React from 'react';
import {
    addPostActionCreator,
    updateNewPostActionCreator,
} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';

const MyPostsContainer = (props) => {

    return (
        <StoreContext.Consumer>{
            store => {
                const state = store.getState();

                const addPost = () => {
                    store.dispatch(addPostActionCreator());
                };

                function onPostChange(text) {
                    const action = updateNewPostActionCreator(text);
                    store.dispatch(action);
                }

                return <MyPosts
                    updateNewPostText={onPostChange}
                    addPost={addPost}
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}
                />;
            }
        }
        </StoreContext.Consumer>
    );

};

export default MyPostsContainer;


