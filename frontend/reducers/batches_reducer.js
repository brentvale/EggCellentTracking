import * as BatchActions from '../actions/batch_actions';
import merge from 'lodash/merge';

const batchesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    case BatchActions.RECEIVE_BATCH:
      const newBatch = {[action.batch.id]: action.batch}
			newBatch[action.batch.id]["photo_url"] = action.batch_photo_url;
      newState = merge({}, state, newBatch);
      return newState;
    default:
      return state;
  }
};

export { batchesReducer };