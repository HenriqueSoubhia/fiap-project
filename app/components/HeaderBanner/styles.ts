import styled from 'styled-components';

const StyledHeaderBanner = styled.header`
  .headerBanner-paragraph-desktop {
    width: 65%;
  }

  .headerBanner-paragraph-mobile {
    display: none;
    padding: 30px 24px;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.pastelBlue};
  }

  .fade-in-left,
  .fade-in {
    opacity: 0;
  }

  @media (max-width: 768px) {
    .headerBanner-paragraph-desktop {
      display: none;
    }
    .headerBanner-paragraph-mobile {
      display: block;
    }
  }
`;

const StyledHeaderBannerContainer = styled.div`
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 80px;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 160px;
  padding-bottom: 200px;
  background-image:
    linear-gradient(90deg, #000000 30%, rgba(16, 16, 16, 0) 100%), url('/imgs/header.jpg');
  background-color: ${({ theme }) => theme.colors.black};

  @media (max-width: 768px) {
    padding: 65px 0;
  }
`;

const StyledHeaderBannerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 100px;
  color: ${({ theme }) => theme.colors.pastelBlue};

  span {
    display: block;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    padding: 0 24px;
  }
`;

const StyledTitleSpanNormal = styled.span`
  color: ${({ theme }) => theme.colors.pastelBlue};
  -webkit-text-stroke-color: transparent;
  -webkit-text-stroke-width: 0;
`;

const StyledScrollDown = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.pastelBlue};

  position: absolute;
  bottom: 80px;

  font-size: 12px;
  line-height: 3;
  font-weight: 500;

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledScrollDownImageContainer = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.pastelBlue};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export {
  StyledHeaderBanner,
  StyledHeaderBannerContainer,
  StyledHeaderBannerContent,
  StyledTitleSpanNormal,
  StyledScrollDown,
  StyledScrollDownImageContainer,
};
