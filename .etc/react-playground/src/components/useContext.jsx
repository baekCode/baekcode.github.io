import React, { useState, useContext, createContext } from 'react';

const UserContext = createContext(null);

export default function App() {
  const [user, setUser] = useState({
    name: '게스트',
    age: 0,
  });

  return (
    <UserContext.Provider value={user}>
      <Profile />
    </UserContext.Provider>
  );
}

function Profile() {
  return <Greetings />;
}

function Greetings() {
  const user = useContext(UserContext);

  return (
    <div>
      <p>{user.name}</p>
      <p>{user.age}</p>
    </div>
  );
}
