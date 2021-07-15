import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';



export function Profile(props) {
// console.log({posts});

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                // store={props.store}
            />
        </div>
    );
}

