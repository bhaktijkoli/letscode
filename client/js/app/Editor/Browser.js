import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Browser extends Component {
  render() {
    if(this.props.store.state.user == null) {
      return(
        <div className="file-browser-empty">
          <p>You have to <Link to="/login">log in</Link> to save your files.</p>
        </div>
      )
    }
    return (
      <div className="file-browser-inner">
        
      </div>
    );
  }
}

export default Browser;
