import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import {followAC, unfollowAC, setUsersAC } from '../../redux/users-reducer';

function mapStateToProps(state) {
    return {users: state.usersPage.users};
}

function mapDispatchToProps(dispatch) {
    return {
        follow: userID => {dispatch(followAC(userID));},
        unfollow: userID => {dispatch(unfollowAC(userID));},
        setUsers: newUsers => {dispatch(setUsersAC(newUsers));}
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);





