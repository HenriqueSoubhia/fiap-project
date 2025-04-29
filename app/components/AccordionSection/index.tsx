import React from 'react'
import Accordion from './Accordion'
import styled from 'styled-components'
import accordionsContent from './accordionsContent'
import Title from '../Title'

const StyledAccordionSection = styled.section`
    padding: 200px 90px;
    background-color: ${({ theme }) => theme.colors.black};
    position: relative;

    @media (max-width: 768px) {
        padding: 100px 24px;
    }
`

const AccordionSection = () => {
  return (
    <StyledAccordionSection>

      <Title style={{marginBottom: 75}} headingSize='h2' variant='pastelBlue'>nossa estrutura</Title>

      {accordionsContent.map((item, index) => (
        <Accordion key={index} title={item.title} desc={item.desc} />
      ))}


    </StyledAccordionSection>
  )
}

export default AccordionSection
