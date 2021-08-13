import React from 'react';
import {Profile} from './Profile';
import {getUserProfile} from '../../redux/profile-reducer';
import {connect} from 'react-redux';
import {Redirect, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {

  componentDidMount() {
    console.log(this.props);
    let userID = this.props.match.params.userID;
    if (!userID) userID = 2;

    this.props.getUserProfile(userID);

  }

  render() {
    return <Profile {...this.props} profile={this.props.profile}/>;

  }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);



