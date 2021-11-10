import React, { useRef, useEffect } from 'react';

export default function App() {
  const inputRef = useRef();
  const boxRef = useRef({});
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button>저장</button>
      {data.map(item => (
        <div key={item.id} ref={ref => (boxRef.current[item.id] = ref)}>
          {item.title}
        </div>
      ))}
    </div>
  );
}

const data = [
  { id: 1, title: 'Title1' },
  { id: 2, title: 'Title2' },
  { id: 3, title: 'Title3' },
  { id: 4, title: 'Title4' },
];
