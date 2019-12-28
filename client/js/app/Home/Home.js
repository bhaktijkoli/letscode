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
              <a href="#"><img className="center-img" src="https://image.flaticon.com/icons/png/512/1628/1628182.png" width="128" height="128" /></a>
            </div>
            <div className="col-md-3 col-sm-4 col-6">
              <a href="#"><img className="center-img" src="https://image.flaticon.com/icons/png/512/1628/1628181.png" width="128" height="128" /></a>
            </div>
            <div className="col-md-3 col-sm-4 col-6">
              <a href="#"><img className="center-img" src="https://image.flaticon.com/icons/png/512/226/226777.png" width="128" height="128" /></a>
            </div>
            <div className="col-md-3 col-sm-4 col-6">
              <a href="#"><img className="center-img" src="https://image.flaticon.com/icons/png/512/180/180867.png" width="128" height="128" /></a>
            </div>
            <div className="col-md-3 col-sm-4 col-6">
              <a href="#"><img className="center-img" src="https://image.flaticon.com/icons/png/512/528/528261.png" width="128" height="128" /></a>
            </div>
            <div className="col-md-3 col-sm-4 col-6">
              <a href="#"><img className="center-img" src="https://image.flaticon.com/icons/png/512/919/919842.png" width="128" height="128" /></a>
            </div>
            <div className="col-md-3 col-sm-4 col-6">
              <a href="#"><img className="center-img" src="https://image.flaticon.com/icons/png/512/919/919828.png" width="128" height="128" /></a>
            </div>
            <div className="col-md-3 col-sm-4 col-6">
              <a href="#"><img className="center-img" src="https://sdtimes.com/wp-content/uploads/2018/02/golang.sh_-490x490.png" width="128" height="128" /></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
