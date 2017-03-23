export const fetchBatches = () => (
  $.ajax({
    method: 'GET',
    url: '/api/batches'
  })
);

export const createBatch = batch => {
  return $.ajax({
    method: 'POST',
    url: '/api/batches',
		processData: false,
  	contentType: false,
		dataType: 'json',
		data: batch
  });
};

export const updateBatch = batch => {
	return $.ajax({
    method: 'PATCH',
    url: '/api/batches/' + batch.id,
		dataType: 'json',
		data: {
			batch: {
				egg_coordinates: JSON.stringify(batch.eggsAndCoords)
			}
		}
	})
};

export const fetchSingleBatch = id => (
	$.ajax({
		method: 'GET',
		url: '/api/batches/' + id
	})
);