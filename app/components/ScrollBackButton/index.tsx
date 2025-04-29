import { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledScrollBackButton = styled.a`
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  z-index: 50;

  background-color: transparent;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.magenta};
  width: 50px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.magenta};
  }
`;

const ScrollBackButton = () => {
  const [showElement, setShowElement] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const screenHeight = window.innerHeight;

      if (scrolled > screenHeight) {
        setShowElement(true);
      } else {
        setShowElement(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!showElement) {
    return null;
  }

  return (
    <StyledScrollBackButton href='#headerBanner'>
      <img src='/svg/scroll-up-arrow.svg' alt='Icone seta para cima' />
    </StyledScrollBackButton>
  );
};

export default ScrollBackButton;
