import React from 'react'
import Accordion from './Accordion'
import styled from 'styled-components'
import accordionsContent from './accordionsContent'

const StyledAccordionSection = styled.section`
    padding: 200px 90px;
    background-color: ${({ theme }) => theme.colors.black};

    position: relative;
`

const StyledH2 = styled.h2`
    font-size: 4rem;
    text-transform: uppercase;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.pastelBlue};
    margin-bottom: 3.5rem;

`

const AccordionSection = () => {
  return (
    <StyledAccordionSection>

      <StyledH2>nossa estrutura</StyledH2>

      {accordionsContent.map((item, index) => (
        <Accordion key={index} title={item.title} desc={item.desc} />
      ))}


    </StyledAccordionSection>
  )
}

export default AccordionSection
