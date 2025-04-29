import React, { useState } from 'react'
import Accordion from './Accordion'
import styled from 'styled-components'
import accordionsContent from './accordionsContent'
import Title from '../Title'

const StyledAccordionSection = styled.section`
    padding: 200px 90px;
    background-color: ${({ theme }) => theme.colors.black};
    position: relative;
    z-index: 1;

    &:before, &:after {
        content: '';
        position: absolute;
        width: 450px;
        height: 450px;
        background-color: rgba(0, 107, 183, 0.2);
        border-radius: 50%;
        z-index: -1;
        filter: blur(400px);
    }

    &:before {
      left: -200px;
    }
    &:after {
      right: -200px;
      top: 300px;
    }

    @media (max-width: 768px) {
        padding: 100px 24px;
    }
`

const AccordionSection = () => {

  const [accordionOpen, setAccordionOpen] = useState<number | null>(null)

  const handleAccordionToggle = (index: number) => {
    setAccordionOpen(prevIndex => (prevIndex === index ? null : index))
  }

  return (
    <StyledAccordionSection>

      <Title style={{ marginBottom: 75 }} headingSize='h2' variant='pastelBlue'>nossa estrutura</Title>

      {accordionsContent.map((item, index) => (
        <Accordion key={index} title={item.title} desc={item.desc} index={index} handleAccordionToggle={handleAccordionToggle} isOpen={accordionOpen === index} />
      ))}


    </StyledAccordionSection>
  )
}

export default AccordionSection
