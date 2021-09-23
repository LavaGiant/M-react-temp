import { Action, Reducer } from "redux";
import { createStore, compose, applyMiddleware, Store } from "redux"
import thunk,{ ThunkMiddleware }  from "redux-thunk";

import reducer from './reducer'

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store: Store<Reducer, Action<ThunkMiddleware>> = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))


export default store
