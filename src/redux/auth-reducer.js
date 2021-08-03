const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  // isFetching: false
};

function authReducer(state = initialState, action) {

  switch (action.type) {
    case SET_USER_DATA:
      return _setUserData(state, action);

  }

  return state;
}

function _setUserData(state, action) {
  const stateCopy = {
    ...state,
    ...action.data,
    isAuth: true,
  };

  return stateCopy;
}

// Action Creators
export function setAuthUserData(userId, email, login) {
  return {type: SET_USER_DATA, data: {userId, email, login}};
}

// export function toggleIsFetching(isFetching) {
//   return {type: TOGGLE_IS_FETCHING, isFetching};
// }

export default authReducer;
