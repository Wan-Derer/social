import React from 'react';
import styles from './Users.module.css';

function Users(props) {

    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: 'https://cs13.pikabu.ru/avatars/1873/x1873132-1972677953.png',
                    followed: false,
                    fullName: 'Имя 1',
                    status: 'Статус 1',
                    location: {city: 'Город 1', country: 'Страна 1'},
                },
                {
                    id: 2,
                    photoUrl: 'https://cs13.pikabu.ru/avatars/1873/x1873132-1972677953.png',
                    followed: true,
                    fullName: 'Имя 2',
                    status: 'Статус 2',
                    location: {city: 'Город 2', country: 'Страна 2'},
                },
                {
                    id: 3,
                    photoUrl: 'https://cs13.pikabu.ru/avatars/1873/x1873132-1972677953.png',
                    followed: false,
                    fullName: 'Имя 3',
                    status: 'Статус 3',
                    location: {city: 'Город 3', country: 'Страна 3'},
                },
                {
                    id: 4,
                    photoUrl: 'https://cs13.pikabu.ru/avatars/1873/x1873132-1972677953.png',
                    followed: true,
                    fullName: 'Имя 4',
                    status: 'Статус 4',
                    location: {city: 'Город 4', country: 'Страна 4'},
                },
            ],
        );
    }

    return (
        <div>
            {
                props.users.map(user => <div key={user.id}>
                        <span>
                            <div><img src={user.photoUrl}
                                      className={styles.userPhoto}
                                      alt=''/>
                            </div>
                            <div>
                                {user.followed
                                    ? <button
                                        onClick={() => {props.unfollow(user.id);}}>Unfollow</button>
                                    : <button
                                        onClick={() => {props.follow(user.id);}}>Follow</button>
                                }

                            </div>
                        </span>
                    <span>
                            <span>
                                <div>{user.fullName}</div>
                                <div>{user.status}</div>
                            </span>
                            <span>
                            <div>{user.location.country}</div>
                            <div>{user.location.city}</div>
                        </span>
                        </span>
                </div>)
            }
        </div>
    );
}

export default Users;

