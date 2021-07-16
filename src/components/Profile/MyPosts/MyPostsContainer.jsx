import React from 'react';
import {
    addPostActionCreator,
    updateNewPostActionCreator,
} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';

function mapStateToProps(state) {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    };
}

function mapDispatchToProps(dispatch) {
    return {
        updateNewPostText: (text) => {
            const action = updateNewPostActionCreator(text);
            dispatch(action);
        },
        addPost: () => { dispatch(addPostActionCreator()); },
    };
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;


