import React, { Component } from 'react';
import { withFirebase } from './../Firebase';

class Logout extends Component {
  componentDidMount() {
    this.props.firebase.auth.signOut()
    .then(res => {
      window.location.href = "/";
    })
  }
  render() {
    return(
      <div></div>
    )
  }
}

export default withFirebase(Logout)
