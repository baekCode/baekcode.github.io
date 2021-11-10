import tw from 'twin.macro'
import React from 'react'
import styled from 'styled-components'

const TextStyle = styled.div`
  ${tw`text-sm`}
`

export default function Text({ text }: { text: string }) {
  return <TextStyle>{text}</TextStyle>
}
