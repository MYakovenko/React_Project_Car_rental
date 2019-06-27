import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import * as serviceWorker from './serviceWorker';
import './index.css';
import Router from './router';
import Header from './components/header/header';

import { store } from "./store/store.js";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Header />
            <Router />
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);

serviceWorker.unregister();
