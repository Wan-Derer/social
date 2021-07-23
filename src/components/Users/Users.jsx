import React from 'react';
import userPhoto from '../../assets/images/user.png';
import styles from './Users.module.css';
import * as axios from 'axios';

class Users extends React.Component {

  componentDidMount() {   // вызывается Реактом сразу после создания объекта
    this.getUsers(this.props.currentPage);
  }

  getUsers = (page) => {
    axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
    .then(response => {
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount);
    });
  };

  onPageChanged = (page) => {
    this.props.setCurrentPage(page);
    this.getUsers(page);
  }

  render() {

    const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div>
        <div>
          {pages.map(page =>
            <span className={this.props.currentPage === page && styles.selectedPage}
                  onClick={ (event) => this.onPageChanged(page) } >
              {' ' + page + ' '}</span>,
          )}


        </div>
        {
          this.props.users.map(user =>
            <div key={user.id}>
            <span>
              <div><img src={user.photos.small != null
                ? user.photos.small
                : userPhoto}
                        className={styles.userPhoto}
                        alt=''/>
              </div>
              <div>
                {user.followed
                  ? <button
                    onClick={() => {this.props.unfollow(user.id);}}>Unfollow</button>
                  : <button
                    onClick={() => {this.props.follow(user.id);}}>Follow</button>
                }

              </div>
            </span>
              <span>
              <span>
                  <div>{user.name}</div>
                  <div>{user.status}</div>
              </span>
              <span>
              <div>{'user.location.country'}</div>
                  <div>{'user.location.city'}</div>
            </span>
            </span>
            </div>)
        }
      </div>
    );
  }
}

export default Users;

