import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { withStore } from './Store';
import { withFirebase } from './Firebase';

import Home from './Home/Home';
import Editor from './Editor/Editor';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Logout from './Logout/Logout';

class Guest extends Component {
  componentDidMount() {
    this.authListener = this.props.firebase.auth.onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.props.store.dispatch({type: 'AUTH_SET_USER', payload: user});
      } else {
        this.authListener();
      }
    });
  }
  render() {
    return (
      <React.Fragment>
        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/editor/:slug' component={Editor} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/logout' component={Logout} />
      </React.Fragment>
    );
  }
}

export default withStore(withFirebase(Guest));
