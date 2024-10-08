import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { applyMiddleware,compose } from 'redux';
import { legacy_createStore as createStore} from 'redux';
import thunk from "redux-thunk";
import Reducers from './Reducers';
import { GoogleOAuthProvider } from '@react-oauth/google';

const store=createStore(Reducers,compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>
    <GoogleOAuthProvider clientId="">
      <React.StrictMode>
       <App />
      </React.StrictMode>
    </GoogleOAuthProvider> 
  </Provider>
);


reportWebVitals();
