import React from 'react'
import styled from 'styled-components'

interface AccordionProps {
    title: string
    desc: string
}

const StyledAccordion = styled.details`

    color: ${({ theme }) => theme.colors.pastelBlue};
    padding: 40px 0;
    border-top: 2px solid ${({ theme }) => theme.colors.davysGrey};
    max-width: 85%;
    margin: 0 auto;

    &:last-child {
        border-bottom: 2px solid ${({ theme }) => theme.colors.davysGrey};
    }
    
    &[open] summary::after {
        content: '－';
    }

    p{
        padding-top: 40px;
        font-size: 18px;
    }
`

const StyledSummary = styled.summary`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    text-transform: uppercase;

    font-size: 25px;
    font-weight: 700;

    cursor: pointer;

    &::after {
        border-color: ${({ theme }) => theme.colors.magenta};
        border-style: solid;
        border-width: 2px;
        border-radius: 50%;
        width: 2rem;
        height: 2rem;
        justify-content: center;
        align-items: center;
        display: flex;
        color: ${({ theme }) => theme.colors.magenta};
        font-size: 1.5rem;
        line-height:1;
        font-weight: 200;
        content: '＋';
    }

    @media (max-width: 768px) {
        font-size: 24px;
    }


`

const Accordion = ({ title, desc }: AccordionProps) => {



    return (
        <StyledAccordion name='accordion'>
            <StyledSummary>
                {title}
            </StyledSummary>
            <p>{desc}</p>
        </StyledAccordion>
    )
}

export default Accordion
