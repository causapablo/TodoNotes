import { compose } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import  rootReducer  from '../reducer/rootReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const middleware = [thunk];

export default configureStore({
   reducer: rootReducer,
   middleware,
   composeEnhancers
});