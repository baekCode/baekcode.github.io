import React, { useState } from 'react';

export default function App() {
  const [friends, setFriends] = useState([]);
  const [ageLimit, setAgeLimit] = useState(MAX_AGE_LIMIT);

  const friendsWithAgeLimit = friends.filter(item => item.age <= ageLimit);
  const onAdd = () => {
    const friend = getNextFriends();
    console.log(friend);
    setFriends([...friends, friend]);
  };
  const onChangeOption = e => {
    const value = Number(e.currentTarget.value);
    console.log(value);
    setAgeLimit(value);
  };

  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      <div>
        <select onChange={onChangeOption} value={ageLimit}>
          {AGE_LIMIT_OPTION.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        세 이하만 보기
      </div>
      <ul>
        {friendsWithAgeLimit.map(friend => (
          <li key={friend.id}>
            {friend.name} ({friend.age})
          </li>
        ))}
      </ul>
    </div>
  );
}

let nextId = 0;
const MAX_AGE_LIMIT = 100;
const AGE_LIMIT_OPTION = [15, 20, 25, MAX_AGE_LIMIT];

const FRIENDS = [
  { name: 'AB', age: 15 },
  { name: 'CD', age: 20 },
  { name: 'EF', age: 25 },
  { name: 'GH', age: 30 },
  { name: 'IJ', age: 35 },
];

const getNextFriends = () => {
  return { ...FRIENDS[nextId % 5], id: nextId++ };
};
