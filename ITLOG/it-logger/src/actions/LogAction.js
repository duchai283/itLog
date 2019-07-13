import {
  SET_LOADING,
  GET_LOGS,
  LOGS_ERROR,
  ADD_LOG,
  DELELE_LOG,
  UPDATE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT
} from './type';

export const getLogs = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch('http://localhost:4200/logs');
    const data = await res.json();
    dispatch({ type: GET_LOGS, payload: data });
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err.response });
  }
};

export const addLog = log => async dispatch => {
  try {
    setLoading();
    const res = await fetch('http://localhost:4200/logs', {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    dispatch({ type: ADD_LOG, payload: data });
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err.response });
  }
};

export const deleteLog = id => async dispatch => {
  try {
    await fetch(`http://localhost:4200/logs/${id}`, {
      method: 'DELETE'
    });
    dispatch({ type: DELELE_LOG, payload: id });
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err.response });
  }
};

export const updateLog = log => async dispatch => {
  try {
    const res = await fetch(`http://localhost:4200/logs/${log.id}`, {
      method: 'PUT',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    dispatch({ type: UPDATE_LOG, payload: data });
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err.response });
  }
};

export const setCurrent = log => {
  return {
    type: SET_CURRENT,
    payload: log
  };
};
export const clearCurrent = log => {
  return {
    type: CLEAR_CURRENT,
    payload: log
  };
};

export const setLoading = () => {
  return { type: SET_LOADING };
};
