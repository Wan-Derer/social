import React from 'react';
import {
    sendMessageCreator,
    updateNewMessageBodyCreator,
} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import StoreContext from '../../StoreContext';

export function DialogsContainer(props) {

    return <StoreContext.Consumer>{
        store => {
            const state = store.getState().dialogsPage;

            function onSendMessageClick() {
                store.dispatch(sendMessageCreator());
            }

            function onNewMessageChange(body) {
                store.dispatch(updateNewMessageBodyCreator(body));
            }

            return <Dialogs
                updateNewMessageBody={onNewMessageChange}
                sendMessage={onSendMessageClick}
                dialogsPage={state}
            />;
        }
    }
    </StoreContext.Consumer>
        ;
}


