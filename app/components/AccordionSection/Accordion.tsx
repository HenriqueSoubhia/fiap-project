import React from 'react';
import { StyledAccordion, StyledSummary } from './styles';

interface AccordionProps {
  title: string;
  desc: string;
  handleAccordionToggle: (index: number) => void;
  index: number;
  isOpen: boolean;
}

const Accordion = ({ title, desc, handleAccordionToggle, index, isOpen }: AccordionProps) => {
  return (
    <StyledAccordion $isOpen={isOpen}>
      <StyledSummary $isOpen={isOpen} onClick={() => handleAccordionToggle(index)}>
        {title}
      </StyledSummary>
      <p>{desc}</p>
    </StyledAccordion>
  );
};

export default Accordion;
