import React, { useState, useEffect, useCallback } from 'react';

export default function App({ userId }) {
  const [user, setUser] = useState('홍길동');

  const fetchUser = useCallback(
    async function fetchUser() {
      const response = await fetch(userId);
      setUser(response);
    },
    [userId],
  );

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);
  return <div></div>;
}
