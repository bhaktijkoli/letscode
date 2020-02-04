import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Browser extends Component {
  state = {
    files: [],
  }
  render() {
    let user = this.props.store.state.user;
    let firestore = this.props.firebase.firestore;
    if(user == null) {
      return(
        <div className="file-browser-empty">
          <p>You have to <Link to="/login">log in</Link> to save your files.</p>
        </div>
      )
    }
    return (
      <div className="file-browser-inner">
        {
          this.state.files.map((file, index) => {
            return(
              <div className="file" key={index} onClick={e=>this.onSelectFile(file)}>
                <p className="file-name">{file.file}</p>
              </div>
            )
          })
        }
      </div>
    );
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevProps.store.state.user == null) {
      let user = this.props.store.state.user;
      if(!user) return;
      let firestore = this.props.firebase.firestore;
      this.setState({files: []});
      firestore.collection(user.uid).get().then((querySnapshot) => {
        let files = [];
        querySnapshot.forEach((doc) => {
          files.push(doc.data());
        });
        this.setState({files});
      });
    }
  }
  onSelectFile = (file) => {
    this.props.changeFile(file)
  }
}

export default Browser;
