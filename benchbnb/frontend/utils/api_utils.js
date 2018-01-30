export const createUser = (user) => (
  $.ajax({
    method: 'POST',
    url: 'api/users',
    data: {user: user}
  })
);

export const createSession = (user) =>(
  $.ajax({
    method: 'POST',
    url: 'api/session',
    data: {user: user}
  })
);

export const deleteSession = () =>(
  $.ajax({
    method: 'DELETE',
    url: 'api/session'
  })
);
