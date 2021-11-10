import React, { useState, useEffect } from 'react';

export default function App() {
  const [flag, setFlag] = useState(true);

  const list = flag ? LIST1 : LIST2;

  return (
    <div>
      {list.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}

const LIST1 = ['사과', '바나나'];
const LIST2 = ['사과', '파인애플', '바나나'];
