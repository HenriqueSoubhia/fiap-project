import styled from 'styled-components';

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 75px;
  padding: 160px 100px;
  background-color: ${({ theme }) => theme.colors.cultured};

  @media (max-width: 768px) {
    gap: 50px;
    padding: 100px 24px;
  }
`;

const StyledArticle = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 72px;
  gap: 96px;
  color: ${({ theme }) => theme.colors.davysGrey};

  p {
    text-align: justify;
  }

  @media (max-width: 768px) {
    gap: 50px;
    grid-template-columns: 1fr;
    padding: 0;
  }
`;

const StyledImageDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const StyledListDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const StyledMainList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  font-size: 20px;

  > li::before {
    content: '/';
    margin: 0 16px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.magenta};
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;
const StyledTechList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;

  li {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.magenta};
    &::before {
      content: '-';
      margin-left: 32px;
      margin-right: 12px;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.magenta};
    }
  }

  @media (max-width: 768px) {
    li {
      font-size: 16px;
    }
  }
`;

const StyledFigure = styled.figure`
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;

  img {
    cursor: url('/svg/cursor-open.svg'), pointer;
  }

  figcaption {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    figcaption {
      font-size: 12px;
    }
  }
`;

const StyledDialog = styled.dialog`
  border: none;
  outline: none;

  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  z-index: 101;

  justify-content: center;
  align-items: center;

  &[open] {
    display: flex;
  }

  button {
    position: fixed;
    top: 32px;
    right: 32px;
    background: transparent;
    border: none;
    color: white;
    font-size: 3rem;
    cursor: pointer;
    outline: none;
    z-index: 101;
  }

  img {
    height: 600px;
    cursor: url('/svg/cursor-close.svg'), pointer;
  }

  @media (max-width: 768px) {
    img {
      height: auto;
      width: 100vw;
    }
  }
`;

export {
  StyledSection,
  StyledArticle,
  StyledImageDiv,
  StyledListDiv,
  StyledMainList,
  StyledTechList,
  StyledFigure,
  StyledDialog,
};
