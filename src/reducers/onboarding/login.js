// imports
import { LOGIN_SUCCESS, LOGIN_FAIL } from '../../actions';

// reducer
const INITIAL_STATE = {
  loginSuccessful: false,
  errorMessage: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        loginSuccessful: true,
      }

    case LOGIN_FAIL:
      return {
        loginSuccessful: false,
        errorMessage: action.payload.data
      }
  }

  return state;
}
