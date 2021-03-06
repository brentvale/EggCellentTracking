import * as EggActions from '../actions/egg_actions';
import merge from 'lodash/merge';

const eggsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    case EggActions.RECEIVE_EGGS:
      action.eggs.forEach(egg => newState[egg.id] = egg);
      return newState;
    case EggActions.RECEIVE_EGG:
      const newEgg = {[action.egg.id]: action.egg}
      newState = merge({}, state, newEgg);
      return newState;
    case EggActions.REMOVE_EGG:
      newState = merge({}, state);
      delete newState[action.egg.id];
      return newState;
    default:
      return state;
  }
};

export { eggsReducer };