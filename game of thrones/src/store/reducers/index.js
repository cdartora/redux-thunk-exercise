const INITIAL_STATE = {
  character: null,
  loading: false,
  error: null,
};

const characterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_API':

      return {
        ...state,
        loading: true,
      }

    case 'UPDATE_CHARACTER':

      if (!action.payload) {
        return {
          ...state,
          loading: false,
          error: 'Por favor insira um nome válido.'
        };
      }

      return {
        ...state,
        character: {
          ...action.payload,
        },
        loading: false,
      }

    case 'NOTIFY_ERROR':

      return {
        ...state,
        error: action.payload,
        character: null,
      }
    
    default:
  
      return state;
  }
}

export default characterReducer;