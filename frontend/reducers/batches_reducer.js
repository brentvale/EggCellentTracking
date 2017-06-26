import * as BatchActions from '../actions/batch_actions';
import merge from 'lodash/merge';

const batchesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case BatchActions.RECEIVE_BATCH:
      const newBatch = {[action.batch.id]: action.batch}
      newState = merge({}, state, newBatch);
      return newState;
    case BatchActions.RECEIVE_CHICKEN_SILHOUETTE_IMAGE:
      const image = {["chickenSilhouette"]: action.image}
      newState = merge({}, state, image);
      return newState;
    default:
      return state;
  }
};

export { batchesReducer };