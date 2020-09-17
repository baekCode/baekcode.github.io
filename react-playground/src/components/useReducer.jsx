import React, { useReducer } from 'react';

export default function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <div>
      <p>이름 : {state.name}</p>
      <p>나이 : {state.age}</p>
      <input
        onChange={e => {
          dispatch({ type: 'name', name: e.target.value });
        }}
        type="text"
      />
      <input
        onChange={e => {
          dispatch({ type: 'age', age: e.target.value });
        }}
        type="text"
      />
    </div>
  );
}

const INITIAL_STATE = { name: '게스트', age: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'name':
      return { ...state, name: action.name };
    case 'age':
      return { ...state, age: action.age };
    default:
      return state;
  }
};

//// Context API를 사용하여 렌더링

import React, { useReducer, createContext, useContext } from 'react';

const UserContext = createContext(null);

export default function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <UserContext.Provider value={dispatch}>
      <p>이름 : {state.name}</p>
      <p>나이 : {state.age}</p>
      <Form />
    </UserContext.Provider>
  );
}

function Form() {
  const dispatch = useContext(UserContext);
  return (
    <div>
      <input
        onChange={e => {
          dispatch({ type: 'name', name: e.target.value });
        }}
        type="text"
      />
      <input
        onChange={e => {
          dispatch({ type: 'age', age: e.target.value });
        }}
        type="text"
      />
    </div>
  );
}

const INITIAL_STATE = { name: '게스트', age: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'name':
      return { ...state, name: action.name };
    case 'age':
      return { ...state, age: action.age };
    default:
      return state;
  }
};
