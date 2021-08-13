import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {Redirect} from 'react-router-dom';

export function Profile(props) {
  return (
    <div>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer/>
    </div>
  );
}

