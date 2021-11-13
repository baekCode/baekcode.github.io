import React, { useState, useCallback } from 'react';

const App = () => {
  const [name, setName] = useState('홍길동');
  const [age, setAge] = useState(0);
  const [v1, setV1] = useState(0);

  const onUserSaveCallback = useCallback(() => onSave(name, age), [name, age]);

  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <p>{v1}</p>
      <User onSave={onUserSaveCallback} setName={setName} setAge={setAge} />
      <button onClick={() => setV1(Math.random() * 10 + 1)}>나이변경</button>
    </div>
  );
};

export default App;

const User = React.memo(({ onSave, setName, setAge }) => {
  console.log('User Component Render');
  return null;
});

function onSave(name, age) {}
