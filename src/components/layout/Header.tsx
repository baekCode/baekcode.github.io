import React from 'react';

export default function Header({ title }: { title: string }) {
  return <header children={title} />;
}
