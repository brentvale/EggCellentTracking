import { combineReducers } from 'redux';
import { eggsReducer } from './eggs_reducer';
import { chickensReducer } from './chickens_reducer';
import { batchesReducer } from './batches_reducer';
import { photoUrlsReducer } from './photo_urls_reducer';

const rootReducer = combineReducers({
  eggs: eggsReducer,
  chickens: chickensReducer,
	batches: batchesReducer,
	photo_urls: photoUrlsReducer
});

export default rootReducer;