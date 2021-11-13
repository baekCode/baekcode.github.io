import React, { useState, createContext, useContext } from 'react';

const UserContext = createContext('');

const App = () => {
  const [name, setName] = useState('게스트');
  const onSubmit = e => {
    e.preventDefault();
    setName(e.target.username.value);
  };
  console.log('App Rendering');
  return (
    <UserContext.Provider value={name}>
      <Profile />
      <form onSubmit={onSubmit}>
        <input name="username" type="text" />
        <button>등록</button>
      </form>
    </UserContext.Provider>
  );
};

export default App;

const Profile = React.memo(() => {
  console.log(useContext(UserContext));
  console.log('Profile Rendering');
  return <Greetings />;
});

const Greetings = React.memo(() => {
  console.log('Greetings Rendering');
  return <h1>님 안녕하세요</h1>;
});
