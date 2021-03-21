import { myReducers } from './reducer';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import myMiddlewares from './middlewares/middlewares';

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let middlewares = [
    thunkMiddleware,
    myMiddlewares,
];

const reducers = combineReducers(myReducers);

const store = createStore(reducers, composer(applyMiddleware(...middlewares)));

export default store;