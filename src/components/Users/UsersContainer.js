import React from 'react';
import {connect} from 'react-redux';
import {
  followAC,
  unfollowAC,
  setUsersAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
} from '../../redux/users-reducer';
import * as axios from 'axios';
import Users from './Users';

class UsersContainer extends React.Component {

  componentDidMount() {   // вызывается Реактом сразу после создания объекта
    this.getUsers(this.props.currentPage);
  }

  getUsers = (page) => {
    axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).
      then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  };

  onPageChanged = (page) => {
    this.props.setCurrentPage(page);
    this.getUsers(page);
  };

  render() {
    return <Users
      totalUsersCount={ this.props.totalUsersCount }
      pageSize={ this.props.pageSize }
      currentPage={this.props.currentPage}
      onPageChanged={this.onPageChanged}
      users={this.props.users}
      follow={this.props.follow}
      unfollow={this.props.unfollow}
    /> ;
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);





