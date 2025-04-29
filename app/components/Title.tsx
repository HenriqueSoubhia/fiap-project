import { ReactNode } from "react";
import styled from "styled-components";

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  variant?: "black" | "pastelBlue" | "outline-pink";
  headingSize?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const StyledHeading = styled.h1`
  font-size: 5rem;
  text-transform: uppercase;
  font-weight: 500;

  &.black{
    color: ${({ theme }) => theme.colors.black};
  }

  &.pastelBlue {
    color: ${({ theme }) => theme.colors.pastelBlue};
  }
  &.outline-pink {
    color: transparent;
    -webkit-text-stroke-color: ${({ theme }) => theme.colors.magenta};
    -webkit-text-stroke-width: 2px;
  }

  @media (max-width: 768px) {
    &[as="h2"]{
      font-size: 36px;
    }
  }
`;

const Title = ({ children, headingSize = "h2", variant = "black", ...props }: TitleProps) => {
  return (
    <StyledHeading {...props} className={variant} as={headingSize}>
      {children}
    </StyledHeading>
  );
};

export default Title;
