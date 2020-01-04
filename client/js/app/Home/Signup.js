import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
class Signup extends Component {
  componentDidMount() {
    document.title = "Let's Code";
  }
  render() {
    return (
      <Fragment>
        <div className='form-section1'>
          <div className='row justify-content-center'>
            <div className='col-xs-12 col-md-10  col-xl-8'>
              <form action='#' className='sform'>
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
                      <label className='label' for='exampleInputEmail1'>
                        Name
                      </label>
                      <input
                        placeholder='Enter Name'
                        type='text'
                        className='form-control'
                        aria-describedby='textHelp'
                      />
                    </div>
                    <div className='form-group'>
                      <label className='label' for='exampleInputEmail1'>
                        Email address
                      </label>
                      <input
                        placeholder='Enter EmailID'
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
                        type='password'
                        className='form-control'
                        placeholder='Enter Password'
                      />
                    </div>
                    <div className='form-group'>
                      <label className='label' for='exampleInputPassword1'>
                        Confirm Password
                      </label>
                      <input
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

export default Signup;
