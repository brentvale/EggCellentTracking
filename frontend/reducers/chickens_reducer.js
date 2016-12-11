import * as ChickenActions from '../actions/chicken_actions';
import merge from 'lodash/merge';

const initialState = {
  "1": {
    id: 1,
    chicken_name: "Polly", 
    biography: "Polly was first to lay", 
    arrival_date: "circa summer 2016, polly", 
    departure_date: ""
  },
  "2": {
    id: 2,
    chicken_name: "Pidgy", 
    biography: "Pidgy is a lot of people's favorite", 
    arrival_date: "circa summer 2016, pidgy", 
    departure_date: ""
  },
  "3": {
    id: 3,
    chicken_name: "Hank", 
    biography: "Hank was found on the road.  Hank is a she.", 
    arrival_date: "circa summer 2016, hank", 
    departure_date: ""
  },
};

const chickensReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    case ChickenActions.RECEIVE_CHICKENS:
      action.chickens.forEach(chicken => newState[chicken.id] = chicken);
      return newState;
    case ChickenActions.RECEIVE_CHICKEN:
      const newChicken = {[action.chicken.id]: action.chicken}
      newState = merge({}, state, newChicken);
      return newState;
    default:
      return state;
  }
};

export { chickensReducer, initialState };