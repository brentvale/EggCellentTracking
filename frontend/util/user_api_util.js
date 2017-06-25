export const fetchCurrentUser = () => (
  $.ajax({
    method: 'GET',
    url: '/api/users/currentUser'
  })
);