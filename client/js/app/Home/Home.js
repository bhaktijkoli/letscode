import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

class Home extends Component {
  componentDidMount() {
    document.title = "Let's Code";
  }
  render() {
    return (
      <Fragment>
        <header className='header-section'>
          <a className='header-link header-link-1' href='#'>
            Login
          </a>
          <a className='header-link header-link-2' href='#'>
            Signup
          </a>
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
                    <a href='#'>Practice</a>
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
                    <a href='#'>Practice</a>
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
                    <a href='#'>Practice</a>
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
                    <a href='#'>Practice</a>
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
                    <a href='#'>Practice</a>
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
                    <a href='#'>Practice</a>
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
                    <a href='#'>Practice</a>
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
                    <a href='#'>Practice</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Home;
