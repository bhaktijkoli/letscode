import React from 'react';
import app from 'firebase/app';
import 'firebase/auth';

const FirebaseContext = React.createContext(null);

const config = {
  apiKey: "AIzaSyCBNnlWKHvCSj30GraSvffrBvU5l270-OU",
  authDomain: "letscode-3af1c.firebaseapp.com",
  databaseURL: "https://letscode-3af1c.firebaseio.com",
  projectId: "letscode-3af1c",
  storageBucket: "letscode-3af1c.appspot.com",
  messagingSenderId: "783509287370",
  appId: "1:783509287370:web:0236eacfc96bf472dd9f33"
};
class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    console.log("Firebase initialize");
  }
}

const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);

export default Firebase;
export { FirebaseContext, withFirebase };
