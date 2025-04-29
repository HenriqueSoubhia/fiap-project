import styled from 'styled-components';

const StyledAccordion = styled.div<{ $isOpen: boolean }>`
  color: ${({ theme }) => theme.colors.pastelBlue};
  padding: 40px 0;
  border-top-width: 2px;
  border-top-style: solid;
  border-top-color: ${({ theme, $isOpen }) =>
    $isOpen ? theme.colors.magenta : theme.colors.davysGrey};
  width: 100%;
  margin: 0 auto;

  &:last-child {
    border-bottom: 2px solid ${({ theme }) => theme.colors.davysGrey};
  }

  p {
    font-size: 16px;
    padding-top: 40px;
    transition:
      max-height 0.5s ease-in-out,
      padding 0.5s ease-in-out;
    overflow: hidden;
    color: ${({ theme }) => theme.colors.davysGrey};
    max-height: ${({ $isOpen }: { $isOpen: boolean }) => ($isOpen ? '500px' : '0')};
    padding: ${({ $isOpen }: { $isOpen: boolean }) => ($isOpen ? '40px 0' : '0 0')};
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    width: 100%;
    p {
      font-size: 16px;
    }
  }
`;

const StyledSummary = styled.summary<{ $isOpen: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  text-transform: uppercase;
  user-select: none;

  font-size: 20px;
  font-weight: 700;

  cursor: pointer;

  &::after {
    border-color: ${({ theme }) => theme.colors.magenta};
    border-style: solid;
    border-width: 2px;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    display: flex;
    color: ${({ theme }) => theme.colors.magenta};
    font-size: 20px;
    padding: 10px;
    line-height: 1;
    font-weight: 200;
    content: ${({ $isOpen }) => ($isOpen ? '－' : '＋')};
  }

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export { StyledAccordion, StyledSummary };
