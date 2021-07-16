const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
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

};

function dialogsReducer(state = initialState, action) {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return _updateNewMessageBody(state, action.body);
        // break;
        case SEND_MESSAGE:
            return _sendMessage(state);
        // break;
    }

    return state;
}

function _sendMessage(state) {
    const stateCopy = {
        ...state,
        messages: [...state.messages, {id: 6, message: state.newMessageBody}],
        newMessageBody: '',
    };

    return stateCopy;
}

function _updateNewMessageBody(state, body) {
    const stateCopy = {
        ...state,
        newMessageBody: body,
    };

    return stateCopy;
}

export function sendMessageCreator() {
    return {
        type: SEND_MESSAGE,
    };
}

export function updateNewMessageBodyCreator(body) {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body,
    };
}

export default dialogsReducer;
