import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";

import reducers from "../reducers/combineReducers";
// import initialState from "./initialState.js";

export const store = createStore(
    reducers
    // initialState,
    // applyMiddleware(thunk)
);