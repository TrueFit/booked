import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import Platform from './misc/platform';
import Login from './onboarding/login';
import Room from './home/room';

const rootReducer = combineReducers({
  form: formReducer,
  platform: Platform,
  room: Room,

  loginResult: Login
});

export default rootReducer;
