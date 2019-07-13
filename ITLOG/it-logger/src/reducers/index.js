import { combineReducers } from 'redux';
import logReducer from './LogReducer';
import techReduer from './TechReducer';

export default combineReducers({
  log: logReducer,
  tech: techReduer
});
