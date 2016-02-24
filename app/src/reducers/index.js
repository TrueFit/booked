import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import Platform from './misc/platform';
import Login from './onboarding/login';

const rootReducer = combineReducers({
  form: formReducer,
  platform: Platform,

  loginResult: Login
});

export default rootReducer;
