import { combineReducers } from 'redux';

import auth from './authReducer'
import noteReducer from './noteReducer'

const rootReducer = combineReducers({
  auth ,
  noteReducer
});

export default rootReducer;