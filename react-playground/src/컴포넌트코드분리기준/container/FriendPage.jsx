import React, { useState } from 'react';
import FriendList from '../components/FriendList';
import NumberSelect from '../components/NumberSelect';

export default function FriendPage() {
  const [friends, setFriends] = useState([]);
  const [ageLimit, setAgeLimit] = useState(MAX_AGE_LIMIT);

  const friendsWithAgeLimit = friends.filter(item => item.age <= ageLimit);
  const onAdd = () => {
    const friend = getNextFriends();
    console.log(friend);
    setFriends([...friends, friend]);
  };

  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      <NumberSelect value={ageLimit} option={AGE_LIMIT_OPTION} onChange={setAgeLimit} label={'세 이하만 보기'} />
      <FriendList friends={friendsWithAgeLimit} />
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
