'use client'

import React from 'react'
import styled from 'styled-components'
import Title from './components/Title'
import Paragraph from './components/Paragraph'

const StyledContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.chineseBlack};
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p{
    color: ${({ theme }) => theme.colors.pastelBlue};
  }
`

const NotFound = () => {
  return (
    <StyledContainer>
      <Title headingSize='h1' variant='outline-pink'>404</Title>
      <Paragraph>Pagina não encontrada</Paragraph>

    </StyledContainer>
  )
}

export default NotFound
