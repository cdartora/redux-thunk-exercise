import charAPI from "../../services/charAPI";

export const fetchApi = () => ({ type: 'FETCH_API' });

export const updateCharacter = (payload) => ({
  type: 'UPDATE_CHARACTER',
  payload,
})

export const notifyError = (payload) => ({
  type: 'NOTIFY_ERROR', payload
})

export const thunk = (query) => async (dispatch) => {
  try {
    dispatch(fetchApi());
    const [data] = await charAPI(query);
    dispatch(updateCharacter(data));
  } catch (err) {
    dispatch(notifyError(err.message));
  }
};

