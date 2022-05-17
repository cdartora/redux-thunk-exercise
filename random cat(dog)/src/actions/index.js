export const REQUEST_API = 'REQUEST_API';
export const GET_PICTURE = 'GET_PICTURE';

const URL = 'https://dog.ceo/api/breeds/image/random';

export const requestAPI = () => ({ type: REQUEST_API });

export const getPicture = (data) => ({ type: GET_PICTURE, data });

export const fetchAPI = () => async (dispatch) => { // thunk
  const response = await fetch(URL);
  const { message } = await response.json();
  dispatch(getPicture(message));
};
