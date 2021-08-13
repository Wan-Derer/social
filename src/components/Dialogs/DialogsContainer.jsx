import React from 'react';
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

function mapStateToProps(state) {
  return {
    dialogsPage: state.dialogsPage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: () => { dispatch(sendMessageCreator()); },
  };
}

const AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;