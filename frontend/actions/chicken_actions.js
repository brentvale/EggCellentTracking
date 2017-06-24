import * as util from '../util/chicken_api_util';

export const RECEIVE_CHICKENS = "RECEIVE_CHICKENS";
export const RECEIVE_PHOTO_URLS = "RECEIVE_PHOTO_URLS";
export const RECEIVE_CHICKEN = "RECEIVE_CHICKEN";

//async actions
export function requestChickens(){
	return(dispatch) => {
		return util.fetchChickens().then(obj => dispatch(receiveChickens(obj)) );
	};
}

//sync actions
export const receiveChickens = (obj) => ({
  type: RECEIVE_CHICKENS,
  chickens: obj
}); 

export const receiveChicken = chicken => ({
  type: RECEIVE_CHICKEN,
  payload: chicken
}); 