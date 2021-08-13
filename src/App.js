import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';



function App(props) {

  return (
    // <BrowserRouter>
    <div className='app-wrapper'>
      <HeaderContainer/>
      <Navbar/>
      <div className='app-wrapper-content'>

        <Route path='/profile/:userID?' render={() => <ProfileContainer/>}/>

        <Route path='/dialogs' render={() => <DialogsContainer/>
        }/>

        <Route path='/users' render={() => <UsersContainer/>}/>

        <Route path='/news' component={News}/>
        <Route path='/music' component={Music}/>
        <Route path='/settings' component={Settings}/>

        <Route path='/login' render={() => <Login/>}/>

      </div>

    </div>
    // </BrowserRouter>
  );
};

export default App;
