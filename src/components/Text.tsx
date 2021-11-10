import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const TextStyle = styled.div`
  ${tw`text-sm`}
`;

export default function Text({ text }: { text: string }) {
  return <TextStyle>{text}</TextStyle>;
}
