export const fetchChickens = success => (
  $.ajax({
    method: 'GET',
    url: '/api/chickens',
		success
  })
);