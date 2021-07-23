const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
};

function usersReducer(state = initialState, action) {

  switch (action.type) {
    case FOLLOW:
      return _setFollow(state, action.userID, true);
    case UNFOLLOW:
      return _setFollow(state, action.userID, false);
    case SET_USERS:
      return {...state, users: action.users};
    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.selectedPage};
    case SET_TOTAL_USERS_COUNT:
      return {...state, totalUsersCount: action.totalCount};
  }

  return state;
}

function _setFollow(state, userID, follow) {
  const stateCopy = {
    ...state,
    users: state.users.map(user => {
      const userCopy = {...user};

      if (userCopy.id === userID) userCopy.followed = follow;

      return userCopy;
    }),
  };

  return stateCopy;
}

export function followAC(userID) {        // Action Creator
  return {type: FOLLOW, userID};
}

export function unfollowAC(userID) {
  return {type: UNFOLLOW, userID};
}

export function setUsersAC(users) {
  return {type: SET_USERS, users};
}

export function setCurrentPageAC(selectedPage) {
  return {type: SET_CURRENT_PAGE, selectedPage};
}

export function setTotalUsersCountAC(totalCount) {
  return {type: SET_TOTAL_USERS_COUNT, totalCount};
}

export default usersReducer;
