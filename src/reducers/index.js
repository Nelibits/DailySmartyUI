import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer as form } from 'redux-form';

import posts from './postsReducer';

const rootReducer = combineReducers({
  form,
  posts
});

export default rootReducer;