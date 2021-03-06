import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {getAuthUserData} from '../../redux/auth-reducer';


class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData();

    // authAPI.me().then(response => {
    //   if (response.data.resultCode === 0) {
    //     const {id, email, login} = response.data.data;
    //     this.props.setAuthUserData(id, email, login);
    //   }
    // });
  }

  render() {
    return <Header {...this.props}/>;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);


