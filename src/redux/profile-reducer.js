const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
    posts: [
        {id: 1, message: 'Привет!', likesCount: 4},
        {id: 2, message: 'Кагдила?', likesCount: 14},
    ],
    newPostText: 'Initial text',
};

function profileReducer(state = initialState, action) {

    switch (action.type) {
        case ADD_POST:
            return _addPost(state);
            // break;
        case UPDATE_NEW_POST_TEXT:
            return _updateNewPostText(state, action.newText);
            // break;
    }

    return state;
}

function _addPost(state) {
    const newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
    };

    const stateCopy = {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
    };

    return stateCopy;
}

function _updateNewPostText(state, newText) {
    const stateCopy = {
        ...state,
        newPostText: newText
    };

    return stateCopy;
}

export function addPostActionCreator() {
    return {
        type: ADD_POST,
    };
}

export function updateNewPostActionCreator(text) {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    };
}

export default profileReducer;
