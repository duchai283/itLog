import {
  SET_LOADING,
  GET_LOGS,
  LOGS_ERROR,
  ADD_LOG,
  DELELE_LOG,
  UPDATE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT
} from '../actions/type';

const initialState = {
  logs: null,
  teachs: null,
  loading: false,
  current: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGS:
      return { ...state, logs: action.payload, loading: false };
    case ADD_LOG:
      return {
        ...state,
        logs: [...state.logs, action.payload],
        loading: false
      };
    case DELELE_LOG:
      return {
        ...state,
        logs: state.logs.filter(log => log.id !== action.payload)
      };

    case UPDATE_LOG:
      return {
        ...state,
        logs: state.logs.map(log =>
          log.id === action.payload.id ? action.payload : log
        )
      };
    case SET_LOADING:
      return { ...state, loading: true };
    case LOGS_ERROR:
      return { ...state, error: action.payload };
    case SET_CURRENT:
      return { ...state, current: action.payload };
    case CLEAR_CURRENT:
      return { ...state, current: null };
    default:
      return state;
  }
};
