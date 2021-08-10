import React from 'react';
import {connect} from 'react-redux';
import {
  setCurrentPage, toggleFollowingInProgress, getUsers, follow, unfollow,
} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/preloader/preloader';

class UsersContainer extends React.Component {

  componentDidMount() {   // вызывается Реактом сразу после создания объекта
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  _getUsers = (pageNumber) => {
    // this.props.toggleIsFetching(true);
    //
    // userAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
    //   this.props.toggleIsFetching(false);
    //   this.props.setUsers(data.items);
    //   this.props.setTotalUsersCount(data.totalCount);
    // });
  };

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return <>
      {this.props.isFetching ? <Preloader/> : null}
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        // toggleFollowingInProgress={this.props.toggleFollowingInProgress}
        followingInProgress={this.props.followingInProgress}

      />;
    </>;
  }
}

function mapStateToProps(state) {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
}

export default connect(mapStateToProps,
  {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingInProgress,
    getUsers,
  },
)(UsersContainer);





