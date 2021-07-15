import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

const store = { 
    _state: {

        profilePage: {
            posts: [
                {id: 1, message: 'Привет!', likesCount: 4},
                {id: 2, message: 'Кагдила?', likesCount: 14},
            ],
            newPostText: 'Initial text',
        },

        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Имя 1'},
                {id: 2, name: 'Имя 2'},
                {id: 3, name: 'Имя 3'},
                {id: 4, name: 'Имя 4'},
                {id: 5, name: 'Пользователь 5'},
            ],
            messages: [
                {id: 1, message: 'Сообщение 1'},
                {id: 2, message: 'Сообщение 2'},
                {id: 3, message: 'Сообщение 3'},
            ],
            newMessageBody: '',

        },

        sidebar: {},

    },

    _callSubscriber() {
        console.log('reRenderEntireTree');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        // this._state.profilePage =
            profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state);


    },


};


export default store;

window.store = store;


