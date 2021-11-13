import React, { useState, useEffect } from 'react';

export default function App({ userId }) {
  const [user, setUser] = useState('홍길동');
  useMounted(() => {
    // fetch(userId).then(data => setUser(data));
    console.log(user);
  });
  useEffect(() => {
    console.log(user);
  }, []);
  return <div></div>;
}

function useMounted(callbak) {
  useEffect(callbak, []);
}
