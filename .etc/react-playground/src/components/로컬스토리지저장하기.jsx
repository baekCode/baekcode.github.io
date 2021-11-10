import React, { useState, useEffect, useRef } from 'react';

export default function App() {
  const inputRef = useRef();
  const [data, setData] = useState([]);

  useEffect(() => {
    inputRef.current.focus();
    const getItem = localStorage.getItem('users');
    if (getItem) {
      setData(JSON.parse(getItem));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(data));
  }, [data]);

  const onSubmit = e => {
    e.preventDefault();

    const id = data.length + 1;
    const name = e.target.name.value === '' ? '미정' : e.target.name.value;
    const age = e.target.age.value === '' ? '미정' : e.target.age.value;

    setData([...data, { id, name, age }]);
  };

  return (
    <div>
      {data &&
        data.map(item => (
          <div key={item.id}>
            이름 : {item.name} ({item.age})
          </div>
        ))}
      <form onSubmit={onSubmit}>
        <input ref={inputRef} name="name" type="text" />
        <input name="age" type="number" />
        <button>등록</button>
      </form>
    </div>
  );
}
