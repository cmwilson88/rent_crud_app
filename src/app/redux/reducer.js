import { combineReducers } from 'redux';
import posts from './posts/reducer';
import users from './users/reducer';
import comments from './comments/reducer';

const rootReducer = combineReducers({
  comments,
  users,
  posts
});

export default rootReducer;
