import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/preloader';

export function ProfileInfo(props) {
  if (!props.profile) {
    return <Preloader/>;
  }

  return (
    <div>
      <div className={s.content}>
        <img
          src='https://u.cdnxp.com/profile/2019/124938-20190405110535-5ca7286f0f028.png'
          alt=''/>
      </div>

      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} alt=''/>
      </div>
      <div>
        {props.profile.aboutMe}
      </div>
    </div>
  );
}