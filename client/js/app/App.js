import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { withStore } from './Store';
import { withFirebase } from './Firebase';

import Home from './Home/Home';
import Editor from './Editor/Editor';
import Login from './Home/Login';
import Signup from './Home/Signup';
import Logout from './Logout/Logout';

class Guest extends Component {
  componentDidMount() {
    this.authListener = this.props.firebase.auth.onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.props.store.dispatch({type: 'AUTH_SET_USER', payload: user});
      }
    });
  }
  render() {
    return (
      <React.Fragment>
        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/editor' component={Editor} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/logout' component={Logout} />
      </React.Fragment>
    );
  }
}

export default withStore(withFirebase(Guest));
