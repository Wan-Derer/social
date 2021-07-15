import React from 'react';
import s from './ProfileInfo.module.css';

export function ProfileInfo() {
    return (
        <div>
            <div className={s.content}>
                <img
                    src='https://u.cdnxp.com/profile/2019/124938-20190405110535-5ca7286f0f028.png'
                    alt=''/>
            </div>

            <div className={s.descriptionBlock}>
                <img
                    src='https://s1.1zoom.ru/big3/389/Cats_British_Shorthair_438784.jpg'
                    alt=''/>
                ava + descr
            </div>
        </div>
    );
}