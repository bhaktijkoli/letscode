import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './Home/Home';
import Editor from './Editor/Editor';
import Login from './Home/Login';
import Signup from './Home/Signup';
class Guest extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/editor' component={Editor} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
      </React.Fragment>
    );
  }
}

export default Guest;
