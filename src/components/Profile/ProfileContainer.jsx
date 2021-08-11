import React from 'react';
import {Profile} from './Profile';
import {getUserProfile} from '../../redux/profile-reducer';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class ProfileContainer extends React.Component {

  componentDidMount() {
    console.log(this.props);
    let userID = this.props.match.params.userID;
    if (!userID) userID = 2;

    this.props.getUserProfile(userID);

    // usersAPI.getProfile(userID).then(response => {
    //   this.props.setUserProfile(response.data);
    // });

  }

  render() {
    return <Profile {...this.props} profile={this.props.profile}/>;

  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);