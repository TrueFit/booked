import { SET_PLATFORM } from '../../actions';

const INITIAL_STATE = 'unknown';

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PLATFORM:
      return action.payload
  }

  return state;
}
