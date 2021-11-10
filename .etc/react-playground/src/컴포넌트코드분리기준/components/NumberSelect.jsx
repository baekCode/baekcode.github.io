import React from 'react';

export default function NumberSelect({ value, option, onChange, label }) {
  const onChangeOption = e => {
    const value = Number(e.currentTarget.value);
    onChange(value);
  };

  return (
    <div>
      <select onChange={onChangeOption} value={value}>
        {option.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {label}
    </div>
  );
}
