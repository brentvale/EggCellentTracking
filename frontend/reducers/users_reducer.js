import * as UserActions from '../actions/user_actions';
import merge from 'lodash/merge';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case UserActions.RECEIVE_CURRENT_USER:
			return merge(newState, {currentUser: action.user});
    default:
      return state;
  }
};

export { usersReducer };