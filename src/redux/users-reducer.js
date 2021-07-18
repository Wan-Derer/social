const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const initialState = {
    users: [
        // {
        //     id: 1,
        //     photoUrl: 'https://cs13.pikabu.ru/avatars/1873/x1873132-1972677953.png',
        //     followed: false,
        //     fullName: 'Имя 1',
        //     status: 'Статус 1',
        //     location: {city: 'Город 1', country: 'Страна 1'},
        // },
        // {
        //     id: 2,
        //     photoUrl: 'https://cs13.pikabu.ru/avatars/1873/x1873132-1972677953.png',
        //     followed: true,
        //     fullName: 'Имя 2',
        //     status: 'Статус 2',
        //     location: {city: 'Город 2', country: 'Страна 2'},
        // },
        // {
        //     id: 3,
        //     photoUrl: 'https://cs13.pikabu.ru/avatars/1873/x1873132-1972677953.png',
        //     followed: false,
        //     fullName: 'Имя 3',
        //     status: 'Статус 3',
        //     location: {city: 'Город 3', country: 'Страна 3'},
        // },
        // {
        //     id: 4,
        //     photoUrl: 'https://cs13.pikabu.ru/avatars/1873/x1873132-1972677953.png',
        //     followed: true,
        //     fullName: 'Имя 4',
        //     status: 'Статус 4',
        //     location: {city: 'Город 4', country: 'Страна 4'},
        // },

    ],
};

function usersReducer(state = initialState, action) {

    switch (action.type) {
        case FOLLOW:
            return _setFollow(state, action.userID, true);
        case UNFOLLOW:
            return _setFollow(state, action.userID, false);
        case SET_USERS:
            return {...state, users: [...state.users, ...action.newUsers]};

    }

    return state;
}

function _setFollow(state, userID, follow) {
    const stateCopy = {
        ...state,
        users: state.users.map(user => {
            const userCopy = {...user};

            if (userCopy.id === userID) userCopy.followed = follow;

            return userCopy;
        }),
    };

    return stateCopy;
}

export function followAC(userID) {        // Action Creator
    return {type: FOLLOW, userID};
}

export function unfollowAC(userID) {
    return {type: UNFOLLOW, userID};
}

export function setUsersAC(newUsers) {
    return {type: SET_USERS, newUsers};
}

export default usersReducer;
