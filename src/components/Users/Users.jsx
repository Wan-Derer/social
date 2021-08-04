import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

function Users(props) {

  const PAGES_LENGTH = 11;
  const totalPagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  const pagesCount = totalPagesCount < PAGES_LENGTH ? totalPagesCount : PAGES_LENGTH;
  const half = Math.floor(pagesCount / 2);
  let startPage = props.currentPage - half;
  if (startPage < 1) startPage = 1;
  if ((startPage + pagesCount) > totalPagesCount) startPage = totalPagesCount - pagesCount;

  const pages = [];
  for (let i = startPage; i < startPage + PAGES_LENGTH; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map(page =>
          <span className={props.currentPage === page && styles.selectedPage}
                onClick={(event) => props.onPageChanged(page)}>
            {page}&#9;</span>,
        )}
      </div>
      {
        props.users.map(user =>
          <div key={user.id}>
            <span>
              <div>
                <NavLink to={'/profile/' + user.id}>
                <img src={user.photos.small != null
                  ? user.photos.small
                  : userPhoto}
                     className={styles.userPhoto}
                     alt=''/>
                  </NavLink>
              </div>
              <div>
                {user.followed
                  ? <button onClick={() => {
                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                      {
                        withCredentials:true,
                      headers:{'API-KEY': '270f00f6-357f-4a90-b45f-23bce749dd8a'}
                      })
                      .then(response =>{
                    if(response.data.resultCode === 0){
                      props.unfollow(user.id);
                    }
                      });
                  }}>Unfollow</button>

                  : <button onClick={() => {
                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                      {},
                      {
                      withCredentials: true,
                        headers:{'API-KEY': '270f00f6-357f-4a90-b45f-23bce749dd8a'}
                      })
                    .then(response => {
                      if (response.data.resultCode === 0) {
                        props.follow(user.id);
                      }
                    });
                  }}>Follow</button>
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

export default Users;