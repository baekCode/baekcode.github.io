import { useEffect, useReducer } from 'react';

function Timer({ initialTime }) {
  const initialState = {
    hour: Math.floor(initialTime / 3600),
    min: Math.floor((initialTime % 3600) / 60),
    sec: Math.floor(initialTime % 60),
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const { hour, min, sec } = state;

  useEffect(() => {
    const id = setInterval(dispatch, 1000);
    return () => clearInterval(id);
  });
}

function reducer(state) {
  const { hour, min, sec } = state;
  if (sec) {
    return { ...state, sec: sec - 1 };
  } else if (min) {
    return { ...state, min: min - 1, sec: 59 };
  } else if (hour) {
    return { hour: hour - 1, min: 59, sec: 59 };
  } else {
    return state;
  }
}
