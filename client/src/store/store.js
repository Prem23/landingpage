import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

import Home from '../reducers/home';

const store = createStore(
    combineReducers({
        home: Home
     }),
    compose(
        applyMiddleware( thunk )
    )
);


export default store;
