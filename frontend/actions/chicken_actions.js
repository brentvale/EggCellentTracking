import * as util from '../util/chicken_api_util';

export const RECEIVE_CHICKENS = "RECEIVE_CHICKENS";
export const RECEIVE_PHOTO_URLS = "RECEIVE_PHOTO_URLS";
export const RECEIVE_CHICKEN = "RECEIVE_CHICKEN";

//async actions
export function requestChickens(){
	return(dispatch) => {
		return util.fetchChickens().then(obj => dispatch(receiveChickens(obj)) && dispatch(receivePhotoUrls(obj)));
	};
}

//sync actions
export const receiveChickens = (obj) => ({
  type: RECEIVE_CHICKENS,
  chickens: obj.chickens
}); 

export const receiveChicken = chicken => ({
  type: RECEIVE_CHICKEN,
  payload: chicken
}); 

//photo_urls sync actions
export const receivePhotoUrls = (obj) => ({
  type: RECEIVE_PHOTO_URLS,
  photo_urls: obj.photo_urls
}); 