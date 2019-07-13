import { ADD_TECH, GET_TECHS, SET_LOADING, DELETE_TECH } from '../actions/type';

const initialState = {
  techs: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TECHS:
      return { ...state, techs: action.payload, loading: false };
    case ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, action.payload],
        loading: false
      };
    case DELETE_TECH:
      return {
        ...state,
        techs: state.techs.filter(t => t.id !== action.payload),
        loading: false
      };
    case SET_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
};
