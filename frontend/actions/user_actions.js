import * as util from '../util/user_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

//async actions
export function requestCurrentUser(){
	return(dispatch) => {
		return util.fetchCurrentUser()
		.then(obj => dispatch(receiveCurrentUser(obj)));
	};
}

//sync actions
export const receiveCurrentUser = obj => ({
  type: RECEIVE_CURRENT_USER,
  user: obj.user
});