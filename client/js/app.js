import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './app/App';
import Firebase, { FirebaseContext } from './app/Firebase';
import { StoreProvider } from './app/Store';


ReactDOM.render(<StoreProvider><FirebaseContext.Provider value={new Firebase()}><BrowserRouter><App/></BrowserRouter></FirebaseContext.Provider></StoreProvider>, document.getElementById('app'));
