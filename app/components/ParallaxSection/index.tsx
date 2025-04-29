import styled from 'styled-components';

const StyledParallaxSection = styled.section`
  height: 70vh;
  background-image: url('/imgs/break-image.jpg');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const ParallaxSection = () => {
  return <StyledParallaxSection />;
};

export default ParallaxSection;
