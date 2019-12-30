import React, { Component } from 'react';
import { Route } from 'react-router-dom';


class Home extends Component {
  componentDidMount() {
    document.title = "Let's Code"
  }
  render() {
    return (
      <div className="code-editor">
        <div className="jumbotron custom-jumbotron">
          <h1 className="display-4">{"<Let's Code/>"}</h1>
        </div>
        <h3 className="display-6">Select Language:</h3>
        <div className="container pgm-language">
          <div className="row">
            <div className="col-md-3 col-sm-4 col-6">
              <img className="center-img" src="../icons/c.svg" width="128" height="128" />
            </div>
            <div className="col-md-3 col-sm-4 col-6">
              <img className="center-img" src="../icons/cpp.svg" width="128" height="128" />
            </div>
            <div className="col-md-3 col-sm-4 col-6">
              <img className="center-img" src="../icons/java.svg" width="128" height="128" />
            </div>
            <div className="col-md-3 col-sm-4 col-6">
              <img className="center-img" src="../icons/python.svg" width="128" height="128" />
            </div>
            <div className="col-md-3 col-sm-4 col-6">
              <img className="center-img" src="../icons/php.svg" width="128" height="128" />
            </div>
            <div className="col-md-3 col-sm-4 col-6">
              <img className="center-img" src="../icons/ruby.svg" width="128" height="128" />
            </div>
            <div className="col-md-3 col-sm-4 col-6">
              <img className="center-img" src="../icons/javascript.svg" width="128" height="128" />
            </div>
            <div className="col-md-3 col-sm-4 col-6">
              <img className="center-img" src="../icons/go.svg" width="128" height="128" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
