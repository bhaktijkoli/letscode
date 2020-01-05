import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { withStore } from './../Store';
import { withFirebase } from './../Firebase';
import { If, Then, Else } from 'react-if';

class Signup extends Component {
  state = {
    proccessing: false,
  }
  componentDidMount() {
    document.title = "Let's Code";
  }
  render() {
    if(this.props.store.state.user != null) {
      window.location.href = "/";
    }
    return (
      <Fragment>
        <div className='form-section1'>
          <div className='row justify-content-center'>
            <div className='col-xs-12 col-md-10  col-xl-8'>
              <form className='sform' onSubmit={this.onSubmit}>
                <h3 className='text-center login-header'>SignUp</h3>
                <div className='row'>
                  <div className='col-xs-12 col-md-6 col-lg-6'>
                    <img
                      className='login-img'
                      src='../icons/signup.svg'
                      width='100%'
                      />
                  </div>
                  <div className='col-xs-12 col-md-6 col-lg-6'>
                    <div className='form-group'>
                      <label className='label'>
                        Name
                      </label>
                      <input
                        id="name"
                        placeholder='Enter Name'
                        type='text'
                        className='form-control'
                        aria-describedby='textHelp'
                        />
                    </div>
                    <div className='form-group'>
                      <label className='label'>
                        Email address
                      </label>
                      <input
                        id="email"
                        placeholder='Enter EmailID'
                        type='email'
                        className='form-control'
                        aria-describedby='emailHelp'
                        />
                    </div>
                    <div className='form-group'>
                      <label className='label'>
                        Password
                      </label>
                      <input
                        id="password"
                        type='password'
                        className='form-control'
                        placeholder='Enter Password'
                        />
                    </div>
                    <div className='form-group'>
                      <label className='label'>
                        Confirm Password
                      </label>
                      <input
                        id="password_confirm"
                        type='password'
                        className='form-control'
                        placeholder='Confirm Password'
                        />
                    </div>
                    <div className='form-group '>
                      <Link className='links' to='/login'>
                        Already have an account?Log In
                      </Link>
                    </div>
                    <If condition={this.state.proccessing}>
                      <Then>
                        <p>Please wait...</p>
                      </Then>
                      <Else>
                        <button type='submit' className='btn-login'>
                          Submit
                        </button>
                      </Else>
                    </If>
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
    this.setState({proccessing: true});
    let email = $('#email').val();
    let password = $('#password').val();
    this.props.firebase.auth.createUserWithEmailAndPassword(email, password).then(res => {
      res.user.updateProfile({displayName: name})
      .then(() => {
        alert("Registration Successfull");
        window.location.href = "/";
      })
    })
    .catch(err => {
      alert("Registration Failed");
    })
    .finally(() => {
      this.setState({proccessing: false});
    })
  }
}

export default withStore(withFirebase(Signup));
