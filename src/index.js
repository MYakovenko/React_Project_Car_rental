import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import * as serviceWorker from './serviceWorker';
import './index.css';
// import {App} from './conteiners/App';
import Router from './router';
import Header from './components/header/header';

import { store } from "./store/store.js";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Header />
            <Router />
            {/* <App /> */}
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
