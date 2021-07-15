import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {
    sendMessageCreator,
    updateNewMessageBodyCreator,
} from '../../redux/dialogs-reducer';

export function Dialogs(props) {

    const state = props.dialogsPage;

    const dialogsElements = state.dialogs.map(dialog =>
        <DialogItem name={dialog.name} id={dialog.id}/>);

    const messagesElements = state.messages.map(message =>
        <Message message={message.message}/>);

    function onSendMessageClick() {
        props.sendMessage();
    }

    function onNewMessageChange(event) {
        const body = event.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea
                            value={state.newMessageBody}
                            placeholder='Введите сообщение'
                            onChange={ onNewMessageChange }
                        />
                    </div>

                    <div>
                        <button onClick={ onSendMessageClick }>Отправить</button>
                    </div>
                </div>
            </div>


        </div>
    );
}


