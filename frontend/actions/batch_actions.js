import * as util from '../util/batch_api_util';

export const RECEIVE_BATCH = "RECEIVE_BATCH";
export const RECEIVE_CHICKEN_SILHOUETTE_IMAGE = "RECEIVE_CHICKEN_SILHOUETTE_IMAGE";

//async actions
export function requestBatches(){
	return(dispatch) => {
		return util.fetchBatches().then(batches => dispatch(receiveBatches(batches)));
	};
}

export function createBatch(batch){
	return(dispatch) => {
		return util.createBatch(batch).then(batch => dispatch(receiveBatch(batch)));
	};
}

export function updateBatch(batch){
	return(dispatch) => {
		return util.updateBatch(batch).then(batch => dispatch(receiveBatch(batch)));
	};
}

export function fetchSingleBatch(id){
	return(dispatch) => {
		return util.fetchSingleBatch(id).then(batch => dispatch(receiveBatch(batch)));
	};
}

export function fetchChickenSilhouette(){
	return(dispatch) => {
		return util.fetchChickenSilhouette().then(obj => dispatch(receiveChickenSilhouetteImage(obj)))
	}
}

//sync actions
export const receiveBatch = batch => ({
	type: RECEIVE_BATCH,
	batch: batch,
});

export const receiveBatches = batches => ({
	type: RECEIVE_BATCHES,
	batches: batches
});

export const receiveChickenSilhouetteImage = obj => ({
	type: RECEIVE_CHICKEN_SILHOUETTE_IMAGE,
	image: obj.image
})