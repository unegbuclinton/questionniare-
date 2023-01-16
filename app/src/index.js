import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from 'react-service-worker';
import { Provider } from 'react-redux';
import store from './store';
import './index.css'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));

registerServiceWorker();
