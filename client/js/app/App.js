import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './Home/Home';
import Editor from './Editor/Editor';

class Guest extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/editor" component={Editor}/>
      </React.Fragment>
    );
  }
}

export default Guest;
