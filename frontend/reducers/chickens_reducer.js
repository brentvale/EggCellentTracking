import * as ChickenActions from '../actions/chicken_actions';
import merge from 'lodash/merge';

const chickensReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case ChickenActions.RECEIVE_CHICKENS:
			newState = action.chickens;
			return newState;
    case ChickenActions.RECEIVE_CHICKEN:
      const newChicken = {[action.chicken.id]: action.chicken}
      newState = merge({}, state, newChicken);
      return newState;
    default:
      return state;
  }
};

export { chickensReducer };