import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

class Login extends Component {
  componentDidMount() {
    document.title = "Let's Code";
  }
  render() {
    return (
      <Fragment>
        <div className='form-section'>
          <div className='row justify-content-center'>
            <div className='col-xs-12 col-md-10 col-lg-8 col-xl-6'>
              <form action='#' className='form'>
                <h3 className='text-center login-header'>Login</h3>
                <div className='row'>
                  <div className='col-xs-12 col-md-6 col-lg-6'>
                    <img
                      className='login-img'
                      src='../icons/login.svg'
                      width='100%'
                    />
                  </div>
                  <div className='col-xs-12 col-md-6 col-lg-6'>
                    <div className='form-group'>
                      <label className='label' for='exampleInputEmail1'>
                        Email address
                      </label>
                      <input
                        type='email'
                        className='form-control'
                        aria-describedby='emailHelp'
                      />
                    </div>
                    <div className='form-group'>
                      <label className='label' for='exampleInputPassword1'>
                        Password
                      </label>
                      <input type='password' className='form-control' />
                    </div>
                    <div className='form-group form-check'>
                      <input type='checkbox' className='form-check-input' />
                      <label
                        className='form-check-label label'
                        for='exampleCheck1'
                      >
                        Remember Me
                      </label>
                    </div>
                    <button type='submit' className='btn-login'>
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Login;
