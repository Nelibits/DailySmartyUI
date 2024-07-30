import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer
});

export default rootReducer;