import React, { Component, Fragment } from 'react';
import { Route, Link } from 'react-router-dom';
import { withStore } from './../Store';

class Home extends Component {
  componentDidMount() {
    document.title = "Let's Code";
  }
  render() {
    return (
      <Fragment>
        <header className='header-section'>
          {this.renderLinks()}
          <div className='header-textbox'>
            <h1 className='header-text'>&#60;Lets Code&#47;&#62;</h1>
            <p className='header-text-sub'>
              A prototype to write and compile programs of different languages.
              Currently supports C, C++, Java, Python, Javascript, GO, Ruby.
            </p>
          </div>
        </header>

        <div className='code-section-container'>
          <div className='code-section'>
            <div className='container1'>
              <div className='cards cards-1'>
                <div className='face face1'>
                  <div className='content'>
                    <img src='https://img.icons8.com/dusk/128/000000/python.png' />
                    <h3>Python</h3>
                  </div>
                </div>
                <div className='face face2'>
                  <div className='content'>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quas cum cumque minus iste veritatis provident at.
                    </p>
                    <Link to='/editor/py'>Practice</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='container1'>
              <div className='cards cards-2'>
                <div className='face face1'>
                  <div className='content'>
                    <img src='https://img.icons8.com/color/128/000000/c-programming.png' />
                    <h3>C</h3>
                  </div>
                </div>
                <div className='face face2'>
                  <div className='content'>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quas cum cumque minus iste veritatis provident at.
                    </p>
                    <Link to='/editor/c'>Practice</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='container1'>
              <div className='cards'>
                <div className='face face1'>
                  <div className='content'>
                    <img src='https://img.icons8.com/color/128/000000/c-plus-plus-logo.png' />
                    <h3>C++</h3>
                  </div>
                </div>
                <div className='face face2'>
                  <div className='content'>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quas cum cumque minus iste veritatis provident at.
                    </p>
                    <Link to='/editor/cplus'>Practice</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='container1'>
              <div className='cards'>
                <div className='face face1'>
                  <div className='content'>
                    <img src='https://img.icons8.com/color/128/000000/golang.png' />
                    <h3>Golang</h3>
                  </div>
                </div>
                <div className='face face2'>
                  <div className='content'>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quas cum cumque minus iste veritatis provident at.
                    </p>
                    <Link to='/editor/go'>Practice</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=' code-section'>
            <div className='container1'>
              <div className='cards cards-row-2'>
                <div className='face face1'>
                  <div className='content'>
                    <img src='https://img.icons8.com/dusk/128/000000/java-coffee-cup-logo.png' />
                    <h3>Java</h3>
                  </div>
                </div>
                <div className='face face2'>
                  <div className='content'>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quas cum cumque minus iste veritatis provident at.
                    </p>
                    <Link to='/editor/java'>Practice</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className='container1'>
              <div className='cards cards-row-2'>
                <div className='face face1'>
                  <div className='content'>
                    <img src='https://img.icons8.com/color/128/000000/javascript.png' />
                    <h3>Javascript</h3>
                  </div>
                </div>
                <div className='face face2'>
                  <div className='content'>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quas cum cumque minus iste veritatis provident at.
                    </p>
                    <Link to='/editor/js'>Practice</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className='container1'>
              <div className='cards cards-row-2'>
                <div className='face face1'>
                  <div className='content'>
                    <img src='https://img.icons8.com/dusk/128/000000/php-logo.png' />
                    <h3>PHP</h3>
                  </div>
                </div>
                <div className='face face2'>
                  <div className='content'>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quas cum cumque minus iste veritatis provident at.
                    </p>
                    <Link to='/editor/php'>Practice</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className='container1'>
              <div className='cards cards-row-2'>
                <div className='face face1'>
                  <div className='content'>
                    <img src='https://img.icons8.com/color/128/000000/ruby-programming-language.png' />
                    <h3>Ruby</h3>
                  </div>
                </div>
                <div className='face face2'>
                  <div className='content'>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quas cum cumque minus iste veritatis provident at.
                    </p>
                    <Link to='/editor'>Practice</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
  renderLinks = () => {
    if (this.props.store.state.user) {
      return (
        <Fragment>
          <nav class='navbar navbar-expand-lg navbar-transparent'>
            <button
              class='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarTogglerDemo01'
              aria-controls='navbarTogglerDemo01'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span class='navbar-toggler-icon'>
                <img src='https://img.icons8.com/metro/20/000000/menu.png' />
              </span>
            </button>
            <div class='collapse navbar-collapse' id='navbarTogglerDemo01'>
              <ul class='navbar-nav ml-auto mt-2 mt-lg-0'>
                <li class='nav-item mr-3 mt-2' style={{ color: 'white' }}>
                  Welcome, &nbsp; {this.props.store.state.user.email}
                </li>
                <li class='nav-item'>
                  <Link className='nav-link btn btn-dark btn-sm' to='/logout'>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </Fragment>
      );
    }
    return (
      <Fragment>
        <nav class='navbar navbar-expand-lg navbar-transparent'>
          <button
            class='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarTogglerDemo01'
            aria-controls='navbarTogglerDemo01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span class='navbar-toggler-icon'>
              <img src='https://img.icons8.com/metro/20/000000/menu.png' />
            </span>
          </button>
          <div class='collapse navbar-collapse' id='navbarTogglerDemo01'>
            <ul class='navbar-nav ml-auto mt-2 mt-lg-0'>
              <li class='nav-item mr-3 mb-2'>
                <Link className='nav-link btn btn-dark btn-sm' to='/login'>
                  Login
                </Link>
              </li>
              <li class='nav-item mr-3 mb-2'>
                <Link className='nav-link btn btn-dark btn-sm' to='/signup'>
                  Signup
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </Fragment>
    );
  };
  onClickLogout = () => {
    alert('Hello');
  };
}

export default withStore(Home);
