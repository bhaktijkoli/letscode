import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { withFirebase } from './../Firebase';

class Login extends Component {
  componentDidMount() {
    document.title = "Let's Code";
  }
  render() {
    console.log("RE RENDER");
    return (
      <Fragment>
        <div className='form-section'>
          <div className='row justify-content-center'>
            <div className='col-xs-12 col-md-10 col-lg-8 col-xl-6'>
              <form  onSubmit={this.onSubmit} className='form'>
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
                        id="email"
                        type='email'
                        className='form-control'
                        aria-describedby='emailHelp'
                      />
                    </div>
                    <div className='form-group'>
                      <label className='label' for='exampleInputPassword1'>
                        Password
                      </label>
                      <input
                        id="password"
                        type='password'
                         className='form-control'
                         />
                    </div>
                    <div className='form-group '>
                      <Link className='links' to='/signup'>
                        Don't have an account?Signup
                      </Link>
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
  onSubmit = (e) => {
    e.preventDefault();
    let email = $('#email').val();
    let password = $('#password').val();
    this.props.firebase.auth.signInWithEmailAndPassword(email, password).then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
  }
}

export default withFirebase(Login);
