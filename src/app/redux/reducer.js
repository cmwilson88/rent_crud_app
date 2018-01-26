import { combineReducers } from 'redux';
import posts from './posts/reducer';
import users from './users/reducer';

const rootReducer = combineReducers({
  users,
  posts
});

export default rootReducer;
