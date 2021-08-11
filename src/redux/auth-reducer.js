import {authAPI} from '../api/api';

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

// Thunk Creators
export const getAuthUserData = () => (dispatch) => {
  authAPI.me().then(response => {
    if (response.data.resultCode === 0) {
      const {id, email, login} = response.data.data;
      dispatch(setAuthUserData(id, email, login));
    }
  });
}

export default authReducer;
