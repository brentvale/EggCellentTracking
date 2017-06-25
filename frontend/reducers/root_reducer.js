import { combineReducers } from 'redux';
import { eggsReducer } from './eggs_reducer';
import { chickensReducer } from './chickens_reducer';
import { batchesReducer } from './batches_reducer';
import { usersReducer } from './users_reducer';

const rootReducer = combineReducers({
  eggs: eggsReducer,
  chickens: chickensReducer,
	batches: batchesReducer,
	users: usersReducer
});

export default rootReducer;