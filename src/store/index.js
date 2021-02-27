import { myReducers } from './reducer';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import clientMiddlewares from './middlewares/client';
import apiClient from '../modules/apiClient';

const client = new apiClient();
const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let middlewares = [
    thunkMiddleware,
    clientMiddlewares(client),
];

const reducers = combineReducers(myReducers);

const store = createStore(reducers, composer(applyMiddleware(...middlewares)));

export default store;