// imports
import { ROOM_UPDATE } from '../../actions';

// reducer
const INITIAL_STATE = {
  name: 'Carver',
  freeUntil: new Date()
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ROOM_UPDATE:
      return action.payload;
  }

  return state;
}
