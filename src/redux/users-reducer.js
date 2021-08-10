import {usersAPI} from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING';

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
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
    case TOGGLE_IS_FETCHING:
      return {...state, isFetching: action.isFetching};
    case TOGGLE_IS_FOLLOWING:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userID]
          : state.followingInProgress.filter(id => id != action.userID),
      };

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

// Action Creators
export function followSuccess(userID) {
  return {type: FOLLOW, userID};
}

export function unfollowSuccess(userID) {
  return {type: UNFOLLOW, userID};
}

export function setUsers(users) {
  return {type: SET_USERS, users};
}

export function setCurrentPage(selectedPage) {
  return {type: SET_CURRENT_PAGE, selectedPage};
}

export function setTotalUsersCount(totalCount) {
  return {type: SET_TOTAL_USERS_COUNT, totalCount};
}

export function toggleIsFetching(isFetching) {
  return {type: TOGGLE_IS_FETCHING, isFetching};
}

export function toggleFollowingInProgress(isFetching, userID) {
  return {type: TOGGLE_IS_FOLLOWING, isFetching, userID};
}

export const getUsers = (currentPage, pageSize) => {      // ThunkCreator
  return (dispatch) => {
    dispatch(toggleIsFetching(true));

    usersAPI.getUsers(currentPage, pageSize).then(data => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    });
  };
};

export const follow = (userID) => {
  return (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userID));
    usersAPI.follow(userID).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(followSuccess(userID));
      }
      dispatch(toggleFollowingInProgress(false, userID));
    });
  }
}

export const unfollow = (userID) => {
  return (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userID));
    usersAPI.unfollow(userID).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(unfollowSuccess(userID));
      }
      dispatch(toggleFollowingInProgress(false, userID));
    });
  }
}

export default usersReducer;
