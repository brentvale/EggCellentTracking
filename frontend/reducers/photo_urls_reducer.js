import * as ChickenActions from '../actions/chicken_actions';
import merge from 'lodash/merge';

const photoUrlsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case ChickenActions.RECEIVE_PHOTO_URLS:
			return merge(newState, action.photo_urls);
    default:
      return state;
  }
};

export { photoUrlsReducer };