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
            _addPost(state);
            break;
        case UPDATE_NEW_POST_TEXT:
            _updateNewPostText(state, action.newText);
            break;
    }

    return state;
}

function _addPost(state) {
    const newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
    };

    state.posts.push(newPost);
    _updateNewPostText(state, '');
}

function _updateNewPostText(state, newText) {
    state.newPostText = newText;
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
