import { myReducers } from './reducer';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import myMiddlewares from './middlewares/middlewares';

// const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// console.log('process.env.NODE_ENV', process.env.NODE_ENV);


// let middlewares = [
//     thunkMiddleware,
//     myMiddlewares,
// ];


// const reducers = combineReducers(myReducers);

// const store = createStore(reducers, composer(applyMiddleware(...middlewares)));

// export default store;


const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let middlewares = [
    thunkMiddleware,
    myMiddlewares,
];

const devTools =
  process.env.NODE_ENV === "production"
    ? applyMiddleware(...middlewares)
    : composer(applyMiddleware(...middlewares));

const reducers = combineReducers(myReducers);

const store = createStore(reducers, devTools);

export default store;




