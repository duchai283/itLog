import { GET_TECHS, ADD_TECH, TECH_ERROR, DELETE_TECH } from './type';
import { setLoading } from './LogAction';

export const getTechs = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch('http://localhost:4200/techs');
    const data = await res.json();
    dispatch({ type: GET_TECHS, payload: data });
  } catch (err) {
    dispatch({ type: TECH_ERROR, payload: err.response });
  }
};

export const addTech = tech => async dispatch => {
  try {
    setLoading();
    const res = await fetch('http://localhost:4200/techs', {
      method: 'POST',
      body: JSON.stringify(tech),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    dispatch({ type: ADD_TECH, payload: data });
  } catch (err) {
    dispatch({ type: TECH_ERROR, payload: err.response });
  }
};

export const deleteTech = id => async dispatch => {
  try {
    setLoading();
    await fetch(`http://localhost:4200/techs/${id}`, {
      method: 'DELETE'
    });
    dispatch({ type: DELETE_TECH, payload: id });
  } catch (err) {
    dispatch({ type: TECH_ERROR, payload: err.response });
  }
};
