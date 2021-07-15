import React from "react";
import s from './Post.module.css';

export function Post(props) {
    return (
        <div className={s.item}>
            <img src='https://cs13.pikabu.ru/avatars/1873/x1873132-1972677953.png'/>
            {props.message + ' qwer'}
            <div>
                <span>Like </span> {props.likesCount}
            </div>
        </div>
    );
}