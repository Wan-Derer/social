import React from 'react';
import {
    sendMessageCreator,
    updateNewMessageBodyCreator,
} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';

export function DialogsContainer(props) {

    const state = props.store.getState().dialogsPage;


    function onSendMessageClick() {
        props.store.dispatch(sendMessageCreator());
    }

    function onNewMessageChange(body) {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <Dialogs
            updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
            dialogsPage={state}
        />
    );
}


