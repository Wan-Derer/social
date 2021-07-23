import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import {
  followAC,
  unfollowAC,
  setUsersAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
} from '../../redux/users-reducer';

function mapStateToProps(state) {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    follow: userID => {dispatch(followAC(userID));},
    unfollow: userID => {dispatch(unfollowAC(userID));},
    setUsers: users => {dispatch(setUsersAC(users));},
    setCurrentPage: selectedPage => {dispatch(setCurrentPageAC(selectedPage));},
    setTotalUsersCount: totalCount => {dispatch(setTotalUsersCountAC(totalCount));},
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);





