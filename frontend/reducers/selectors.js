const getAllEggs = ({ eggs }) => (
  Object.keys(eggs).map(id => eggs[id])
);

const getAllChickens = ({ chickens }) => {
	if(Object.keys(chickens).length === 0){
		return [];
	} else {
		return Object.keys(chickens).map(id => chickens[id]);
	}
};

const getAllPhotoUrls = ({ photo_urls }) => {
	if(typeof photo_urls === "undefined"){
		return [];
	} else {
		return photo_urls;
	}
};

const getAllBatches = ({ batches }) => (
  Object.keys(batches).map(id => batches[id])
);

const getBatchById = ({ batches }, batchId) => {
	const foundBatch = batches[batchId];
	return foundBatch || {};
};

const createEggsHashFromChickens = ({ chickens }) => {
	//create a hash of all chickens to track eggs in batch_edit
	let eggsCountHash = {};
	for(let i in chickens){
		eggsCountHash[chickens[i].id] = 0;
	}
	return eggsCountHash;
}

const parseEggCoordinates = ({ batches }, batchId) => {
	
}
	

export { getAllEggs, getAllChickens, getAllBatches, getBatchById, createEggsHashFromChickens, parseEggCoordinates, getAllPhotoUrls};