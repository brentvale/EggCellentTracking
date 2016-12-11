import { combineReducers } from 'redux';
import { eggsReducer } from './eggs_reducer';
import { chickensReducer } from './chickens_reducer';

const rootReducer = combineReducers({
  eggs: eggsReducer,
  chickens: chickensReducer
});

export default rootReducer;